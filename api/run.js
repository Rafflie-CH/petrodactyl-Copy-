export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Metode tidak diizinkan.' });
    }

    const { code } = req.body;

    if (!code) {
        return res.status(400).json({ error: 'Kode tidak boleh kosong.' });
    }

    // --- Ini adalah bagian simulasi ---
    // Logika ini akan mensimulasikan output berdasarkan input
    const simulatedOutput = `[2025-08-16 07:30:00] Info: Menjalankan kode...\n`;
    
    // Simulasikan output konsol dan error
    if (code.includes('console.error')) {
        return res.status(200).json({ output: simulatedOutput + 'Output dari console.error: Ini adalah pesan error yang disimulasikan.' });
    }

    // Output umum
    return res.status(200).json({ output: simulatedOutput + 'Output dari console.log: ' + code.substring(0, 50) + '...' });
}

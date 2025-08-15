async function runCode() {
    const code = document.getElementById('code-editor').value;
    const outputElement = document.getElementById('output');

    outputElement.textContent = 'Menjalankan kode...';

    try {
        // Memanggil fungsi serverless Vercel
        const response = await fetch('/api/run', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ code: code })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Terjadi kesalahan saat menjalankan kode.');
        }

        const result = await response.json();
        // Menampilkan output yang disimulasikan
        outputElement.textContent = result.output || 'Tidak ada output.';

    } catch (error) {
        outputElement.textContent = `Error: ${error.message}`;
    }
}

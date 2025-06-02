document.addEventListener('DOMContentLoaded', () => {
  const youtubeUrlInput = document.getElementById('youtube-url');
  const transcribeButton = document.getElementById('transcribe-button');
  const transcriptionOutput = document.getElementById('transcription-output');

  transcribeButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default form submission

    const youtubeUrl = youtubeUrlInput.value;

    // Set placeholder message
    transcriptionOutput.textContent = 'Transcription in progress...';

    // Log URL to console (for debugging)
    console.log('YouTube URL:', youtubeUrl);

    // TODO: Add actual transcription logic here
  });
});

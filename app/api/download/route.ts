import { NextResponse } from 'next/server';
import archiver from 'archiver';

export async function GET() {
  const archive = archiver('zip', {
    zlib: { level: 9 } // Sets the compression level.
  });

  const stream = new ReadableStream({
    start(controller) {
      archive.on('data', (chunk) => controller.enqueue(chunk));
      archive.on('end', () => controller.close());
      archive.on('error', (err) => controller.error(err));
      
      // Add all files in the current directory, ignoring heavy/build folders
      archive.glob('**/*', {
        cwd: process.cwd(),
        ignore: ['node_modules/**', '.next/**', '.git/**', '*.zip'],
        dot: true // Include hidden files like .env, .gitignore
      });
      
      archive.finalize();
    }
  });

  return new NextResponse(stream, {
    headers: {
      'Content-Type': 'application/zip',
      'Content-Disposition': 'attachment; filename="canvex-display-source.zip"',
    }
  });
}

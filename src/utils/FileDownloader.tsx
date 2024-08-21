class FileDownloader {
  private fileUrl: string;
  private fileName: string;

  constructor(fileUrl: string, fileName: string) {
    this.fileUrl = fileUrl;
    this.fileName = fileName;
  }

  download(): void {
    const link = document.createElement("a");
    link.href = this.fileUrl;
    link.download = this.fileName;
    link.click();
  }
}

export default FileDownloader;
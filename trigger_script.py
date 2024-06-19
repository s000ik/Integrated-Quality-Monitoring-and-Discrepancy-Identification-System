import os
import time
import nbformat
from nbconvert.preprocessors import ExecutePreprocessor
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

class NewFileHandler(FileSystemEventHandler):
    def __init__(self, notebook_path):
        self.notebook_path = notebook_path
        self.last_modified = time.time()

    def on_created(self, event):
        if not event.is_directory:
            current_time = time.time()
            # Prevents the handler from triggering multiple times for the same event
            if current_time - self.last_modified > 1:
                self.last_modified = current_time
                print(f"New file detected: {event.src_path}")
                run_notebook(self.notebook_path)

def run_notebook(notebook_path):
    with open(notebook_path, 'r', encoding='utf-8') as f:
        nb = nbformat.read(f, as_version=4)
    ep = ExecutePreprocessor(timeout=600, kernel_name='python3')

    try:
        ep.preprocess(nb)
        print(f"Notebook {notebook_path} executed successfully.")
    except Exception as e:
        print(f"Error executing the notebook: {e}")

if __name__ == "__main__":
    path_to_watch = r"/Users/mohitverma/Desktop/projects/SIH23/DataForMLmodel"  # Use a raw string for the file path
    notebook_to_run = r'/Users/mohitverma/Desktop/projects/SIH23/MLmodel/Data Cleaning OMMAS (3).ipynb'  # Replace with your notebook path

    event_handler = NewFileHandler(notebook_to_run)
    observer = Observer()
    observer.schedule(event_handler, path_to_watch, recursive=False)
    observer.start()
    
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
    observer.join()


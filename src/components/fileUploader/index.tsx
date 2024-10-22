import * as React from 'react';
import { FileUploaderRegular } from '@uploadcare/react-uploader';
import { FileEntry } from '@/types';

 
interface IFileUploaderProps {
  fileEntry: FileEntry,
  onChange: (fileEntry: FileEntry) => void;
}

const FileUploader: React.FunctionComponent<IFileUploaderProps> = (fileEntry, onChange,) => {
  const [uploadFiles, setUploadedFiles] = useState<OutputFileEntry[]>([]);
  const ctxProviderRef = React.useRef<typeof LR.UploadCtxProvider.prototype & ListRestart.UploadCtxProvider>(null);
    return (
       <FileUploaderRegular
            pubkey="5b3122605bc0b9b288ed"
            maxLocalFileSizeBytes={1000000000}
            multiple={false}
            imgOnly={true}
            sourceList="local, url, camera"
            classNameUploader="my-config uc-light"
      />
      
  ) ;
};

export default FileUploader;

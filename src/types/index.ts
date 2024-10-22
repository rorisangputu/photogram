import { OutputFileEntry } from "@uploadcare/react-uploader";

export interface UserLogIn {
    email: string;
    password: string;
};

export interface UserSignIn {
    email: string;
    password: string;
    confirmPassword: string;
};

export interface FileEntry{
    files: OutputFileEntry[];
}

export interface Post {
    caption: string;
    photo: string | File;
    likes: number;
    userlikes: [];
    userId: string | null;
    date: Date;
}

export interface PhotoMeta{
    cdnUrl: string;
    uuid: string;
}


export interface Post {
    id: number;
    title: string;
    description: string;
    previewImg: string;
    coverImg: string;
    type: string;
    level: string;
    peopleCount: number[];
    duration: number;
  }

  export type Posts = Post[];


  export type ApplicationStore = {
    questBg: string;
  };
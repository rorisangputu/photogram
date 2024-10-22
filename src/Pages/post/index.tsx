import Layout from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import * as React from 'react';
import { useUserAuth } from '@/context/userAuthContext';
import {Post } from '@/types';

interface ICreatePostProps {
}

const CreatePost: React.FunctionComponent<ICreatePostProps> = (props) => {
  const { user } = useUserAuth();
  

  const [post, setPost] = React.useState<Post>({
    caption: "",
    photo: "",
    likes: 0,
    userlikes: [],
    userId: null,
    date: new Date()
  });

  const handleImageChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setPost({ ...post, photo: file || "" });
  }
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPost({ ...post, [e.target.name]: e.target.value });
        console.log(post);
  }

  const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("The post is: ", post);
    if (user != null) {
      
    }
  }

  return (
    <Layout>
      <div className='flex justify-center'>
        <div className='border max-w-3xl w-full'>
          <h3 className='bg-slate-800 text-white text-center text-lg p-2'>Create Post</h3>
          <div className="p-8">
            <form action="" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <Label className='mb-4' htmlFor='caption'>Photo caption</Label>
                <Textarea
                  className='mb-8'
                  name="caption"
                  id='caption'
                  placeholder="What's in your photo?"
                  value={post.caption}
                  onChange={(e) => handleChange(e)}
                />
                <div className="flex flex-col">
                  <Label className='mb-4' htmlFor='photo'>Photo</Label>
                  <Input
                        type="file"
                        name='photo'
                        accept='image/*'
                        className='bg-white p-4 w-full border'
                        onChange={(e) => handleImageChange(e)}
                    />
                </div>
                <Button className='mt-8 w-32' type="submit">Post</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreatePost;

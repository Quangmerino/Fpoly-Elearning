import Marketing from '@/components/Blog/Marketing';
import ReadingList from '@/components/Blog/ReadingList';
import Reason from '@/components/Blog/Reason';
import RelatedBlog from '@/components/Blog/RelatedBlog';
import React from 'react';

type Props = {

}
function BlogPage({}:Props) {
    return (
        <div className='lg:mt-20'>
            <Reason/>
            <ReadingList/>
            <RelatedBlog/>
            <Marketing/>
        </div>
    );
}

export default BlogPage;
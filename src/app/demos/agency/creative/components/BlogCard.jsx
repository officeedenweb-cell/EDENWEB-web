'use client';

import { BsArrowRight } from 'react-icons/bs';
import { Card, CardBody, CardTitle } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
const BlogCard = ({
  blog
}) => {
  return <Card as={'article'} className="bg-transparent">
      <Image src={blog.image} className="card-img" alt="blog-image" />
      <CardBody className="px-0 pb-0">
        <CardTitle as={'h6'}>{blog.title}</CardTitle>
        <div className="d-flex justify-content-between align-items-center">
          <p className="mb-0">
            By {blog.publishedBy?.firstName} {blog.publishedBy?.lastName}
          </p>
          <Link className="icon-link icon-link-hover stretched-link me-1" href={blog.url}>
            Read more
            <BsArrowRight className="bi" />
          </Link>
        </div>
      </CardBody>
    </Card>;
};
export default BlogCard;
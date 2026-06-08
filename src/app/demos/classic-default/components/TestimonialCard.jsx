import { BsFillStarFill, BsStar, BsStarHalf } from 'react-icons/bs';
import { Card, CardBody, CardFooter } from 'react-bootstrap';
import Image from 'next/image';
const TestimonialCard = ({
  testimonial
}) => {
  return <Card className="bg-transparent h-100">
      <CardBody className="p-0">
        {testimonial.rating && <ul className="list-inline mb-2">
            {Array(Math.floor(testimonial.rating)).fill(0).map((_star, idx) => <li key={idx} className="list-inline-item me-1">
                  <BsFillStarFill size={18} className="text-warning" />
                </li>)}
            {!Number.isInteger(testimonial.rating) && <BsStarHalf size={18} className="text-warning me-1" />}
            {testimonial.rating < 5 && Array(5 - Math.ceil(testimonial.rating)).fill(0).map((_star, idx) => <li key={idx} className="list-inline-item me-1">
                    <BsStar size={18} className="text-warning" />
                  </li>)}
          </ul>}

        <p className="heading-color fw-normal">{testimonial.comment}</p>
      </CardBody>
      <CardFooter className="bg-transparent p-0">
        <div className="d-flex align-items-center">
          <div className="avatar avatar-sm flex-shrink-0 me-2">
            {testimonial.user.avatar && <Image className="avatar-img rounded" src={testimonial.user.avatar} alt="avatar" />}
          </div>
          <p className="mb-0">
            By {testimonial.user.firstName} {testimonial.user.lastName}
          </p>
        </div>
      </CardFooter>
    </Card>;
};
export default TestimonialCard;
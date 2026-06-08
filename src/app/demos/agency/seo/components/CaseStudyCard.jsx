import { FaArrowRightLong } from 'react-icons/fa6';
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
const CaseStudyCard = ({
  item
}) => {
  return <Card className="card-img-scale card-element-hover overflow-hidden">
      <div className="card-img-scale-wrapper">
        <div className="card-img-overlay hover-element d-flex align-items-center justify-content-center">
          {item.company.image && <Image src={item.company.image} className="h-40px z-index-2" alt="client logo" />}

          <div className="bg-overlay bg-dark opacity-7"></div>
        </div>

        {item.image && <Image src={item.image} className="img-scale card-img-top" alt="portfolio-img" />}
      </div>

      <CardBody>
        <CardTitle as={'h6'} className="mb-2">
          {item.title}
        </CardTitle>
        <CardText as={'p'} className="mb-3">
          {item.description}
        </CardText>

        <div className="hstack flex-wrap gap-2 mb-4">
          {item.tags && item.tags.map((tag, idx) => <div className="badge border heading-color bg-light" key={idx}>
                {tag}
              </div>)}
        </div>

        <Link href={item.url} className="text-primary-hover stretched-link heading-color mb-0">
          View case study
          <FaArrowRightLong className="fa-fw ms-2" />
        </Link>
      </CardBody>
    </Card>;
};
export default CaseStudyCard;
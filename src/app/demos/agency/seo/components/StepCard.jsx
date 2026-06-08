import { Card } from 'react-bootstrap';
const StepCard = ({
  step
}) => {
  return <Card className="card-body border p-4 h-100">
      {step.stepNumber && <h6 className="text-primary mb-4">
          {step.stepNumber < 10 && <span>0</span>}
          {step.stepNumber}.
        </h6>}
      <h5>{step.title}</h5>
      <p className="mb-0">{step.description}</p>
    </Card>;
};
export default StepCard;
import ReviewPlatformsContent from './1review-platforms';
import ReviewTestsContent     from './1review-tests';

export default function Review(props){
  if(props.type === 'events'){
    return <ReviewPlatformsContent {...props}/>
  }
  if(props.type === 'tests'){
    return <ReviewTestsContent {...props} />
  }
  return null;
}
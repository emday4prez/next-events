import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../helpers/api-util';

function HomePage(props) {
  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      events: await getFeaturedEvents(),
    },
  };
}

export default HomePage;

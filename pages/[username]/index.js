import { useRouter } from 'next/router';
import Dashboard from '../../components/Dashboard'; // Your Dashboard component

const UserProfile = () => {
  const router = useRouter();
  const { username } = router.query;

  // Placeholder user data for testing
  const userData = {
    username: username,
    name: 'John Doe',
    designation: 'Software Developer',
    college: 'Sample University',
    skills: ['React', 'Node.js', 'JavaScript'],
    jobsApplied: 5,
  };

  if (!username) {
    return <div>Invalid username</div>;
  }

  return (
    <div>
   <h1>{username} Profile</h1>
      <Dashboard userData={userData} />
    </div>
  );
};

export default UserProfile;

import { Descope } from '@descope/nextjs-sdk';
 
const Page = () => {
	return (
		<Descope
			flowId="sign-up-or-in"
			onSuccess={(e: any) => console.log(e.detail.user)}
			onError={(e: any) => console.log('Could not log in!')}
		/>
	);
};
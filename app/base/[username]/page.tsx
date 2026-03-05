//under the base the username acts as the nested routes and this s the example of the nested routes


export default async function UserPage({ params }: { params: { username: string } }) {
    const { username } =await  params;    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl font-bold mb-4">Welcome, {username}!</h1>

            <p className="text-lg text-center max-w-2xl">   


                This is your personalized page. Here you can find your profile information, recent activity, and any updates related to your account. We are excited to have you here and look forward to providing you with a great experience. Feel free to explore and make the most out of your time on our platform!
            </p>
        </div>
    );
}   
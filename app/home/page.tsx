//for every route one folder folder to be created with that route name and inside that folder a page.tsx file to be created which will be the component for that route
//and component name can be anything , but the file name unfer that rout folder should always be the page.tsx



export default function home(){
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl font-bold mb-4">Welcome to Our Home Page</h1>
            <p className="text-lg text-center max-w-2xl">
                This is the home page of our application. Here you can find the latest updates, news, and features that we have to offer. We are committed to providing you with the best experience possible, so feel free to explore and discover all that we have in store for you.
            </p>
        </div>
    );
}
import think from "@/assets/how/think.png";
import cool from "@/assets/how/cool.png";
import beg from "@/assets/how/beg.png";
//  tuto images
import step1 from "@/assets/how/step1.png";
import step2 from "@/assets/how/step2.png";
import step3 from "@/assets/how/step3.png";

export default function How() {
    return (
        <div className="">
            {/* title */}
            <div className="p-4">
                <img src={think} alt="Thinking" className="h-25" />
                <h1 className="font-dynapuff text-4xl">
                    How does SoM voting work?
                </h1>
                <span>Quick explainer and tutorial how to get started</span>
            </div>
            {/* navigator */}
            <div className=""></div>
            {/* How to ship */}
            <div className="bg-som-bg rounded-md shadow-md p-4">
                <h2 className="font-dynapuff text-3xl mt-6 mb-4">
                    How to ship a project?
                </h2>
                <p>
                    So you made your project, right? And you want to earn those
                    sweet shells to finally make your money worth. You are sure
                    it's finished polished and ready to go. But how do you ship
                    it? Here is how:
                </p>
                {/* Pre-ship checks */}
                <h3 className="font-black text-2xl mt-4">Before you ship</h3>
                <p className="">
                    First, assure that you have all this:
                    <br />
                </p>
                <ul className="list-disc ml-6 mb-2">
                    <li>
                        <input type="checkbox" id="demolink" />
                        <label htmlFor="demolink" className="ml-2">
                            I have a demo link
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" id="bugfree" />
                        <label htmlFor="bugfree" className="ml-2">
                            My project works bug free
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" id="gooddescription" />
                        <label htmlFor="gooddescription" className="ml-2">
                            I have a good description of my project
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" id="githublink" />
                        <label htmlFor="vehicle4" className="ml-2">
                            I have a GitHub link
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" id="banner" />
                        <label htmlFor="banner" className="ml-2">
                            I have a banner
                        </label>
                    </li>
                </ul>
                <span>
                    Important! You <b>need</b> to have a README.md file! If it's
                    empty you will get rejected! Quickly explain what the
                    project is and how can you run it inside
                </span>

                {/* Shipping */}
                <h3 className="font-black text-2xl mt-4">
                    <img src={cool} alt="" className="h-25" />
                    Shipping your project
                </h3>
                <span>So you made all of that? You are ready to ship!</span>
                <p className="my-2">
                    Some things you need to know before shipping: <br />
                    1. You cannot reverse a ship once it's shipped! <br />
                    2. It takes from 5 days to more than a week to get approved{" "}
                    <br />
                    3. MAKE SURE TO DEVLOG ALL NEW CHANGES!! (to sqeeze all the
                    time you have) <br />
                </p>
                <div className="">
                    <h3 className="font-black text-2xl mt-4">
                        Step one: click this button
                    </h3>
                    <img
                        src={step1}
                        alt=""
                        className="rounded-md mt-2 shadow-md w-500"
                    />
                    <p className="mt-2">
                        Easy right? I think so too! That's the first step
                        completed! Right now you just opened the dialog to ship
                        your project. Now what's left is go through the form
                    </p>
                </div>
                <div className="">
                    <h3 className="font-black text-2xl mt-4">
                        Step two: fill out the form
                    </h3>
                    <p>
                        To get to the next step (checking required data) you
                        need to click "next"
                    </p>
                    <img
                        src={step2}
                        alt=""
                        className="rounded-md mt-2 shadow-md w-500"
                    />
                    <p className="my-4">
                        Clicked next? Great! Now we are at the step where we can
                        check if you really made your project ready to ship
                    </p>
                    <img
                        src={step3}
                        alt=""
                        className="rounded-md mt-2 shadow-md w-500"
                    />
                    <p className="my-4">
                        When you have all of the requirements checked, you can
                        proceed to the next step. Basically it's all done now!
                        Next button you will see after you complete all the
                        requirements, is the "Ship" button. It's on the right,
                        In the place where the "Complete Requirements First"
                        button is now
                    </p>
                </div>
            </div>
            <div className="mt-20">
                <img src={beg} alt="" className="h-25"/>
                <h1 className="font-dynapuff text-4xl">What happens now?</h1>
                <p>
                    So when do i get my shells?
                </p>
            </div>
        </div>
    );
}

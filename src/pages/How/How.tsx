import think from "@/assets/how/think.webp";
import cool from "@/assets/how/cool.webp";
import beg from "@/assets/how/beg.webp";
//  tuto images
import step1 from "@/assets/how/step1.webp";
import step2 from "@/assets/how/step2.webp";
import step3 from "@/assets/how/step3.webp";
import easterneurope from "@/assets/how/eastern_europe.webp";
import { TimeCalculator } from "./components/time-calculator";
import { memo, useEffect, useMemo, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { WhatCanBuy } from "./components/whatcanbuy";

function How() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1200);
        return () => clearTimeout(timer);
    }, []);

    const [checks, setChecks] = useState({
        demolink: false,
        bugfree: false,
        gooddescription: false,
        githublink: false,
        banner: false,
    });
    const [showPopup, setShowPopup] = useState(false);
    const [showEasternEgg, setShowEasternEgg] = useState(false);

    const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, checked } = e.target;
        const newChecks = { ...checks, [id]: checked };
        setChecks(newChecks);
        // Sprawdź czy wszystkie są zaznaczone
        if (Object.values(newChecks).every(Boolean)) {
            setShowPopup(true);
        } else {
            setShowPopup(false);
        }
    };

    const optimizedChecks = useMemo(
        () => [
            { id: "demolink", label: "I have a demo link", value: checks.demolink },
            { id: "bugfree", label: "My project works bug free", value: checks.bugfree },
            { id: "gooddescription", label: "I have a good description of my project", value: checks.gooddescription },
            { id: "githublink", label: "I have a GitHub link", value: checks.githublink },
            { id: "banner", label: "I have a banner", value: checks.banner },
        ],
        [checks]
    );

    if (loading) {
        return (
            <div className="p-4">
                <Skeleton className="w-full h-30 rounded-t rounded-xl mb-20" />
                <Skeleton className="h-40 w-40 mb-4" />
                <Skeleton className="h-12 w-1/2 mb-4" />
                <Skeleton className="h-8 w-1/3 mb-2" />
                <Skeleton className="h-50 w-60 mb-2" />
                <Skeleton className="h-6 w-full mb-2" />
                <Skeleton className="h-96 w-full mb-4" />
                <Skeleton className="h-8 w-1/2 mb-2" />
                <Skeleton className="h-6 w-full mb-2" />
                <Skeleton className="h-96 w-full mb-4" />
            </div>
        );
    }
    return (
        <div className="">
            <nav className="sticky top-0 bg-som-bg/80 backdrop-blur-sm z-10 p-4 shadow-sm rounded-2xl rounded-t-none mb-10">
                <h2 className="font-dynapuff text-xl mb-2">Quick Navigation</h2>
                <ul className="flex flex-wrap gap-4 font-dynapuff underline ">
                    <li>
                        <a href="#pre-ship">Pre-ship checks</a>
                    </li>
                    <li>
                        <a href="#shipping">Shipping</a>
                    </li>
                    <li>
                        <a href="#what-now">What happens now</a>
                    </li>
                    <li>
                        <a href="#approved">How to get approved faster</a>
                    </li>
                    <li>
                        <a href="#limit-shells">
                            Limit on max shells per project
                        </a>
                    </li>
                    <li>
                        <a href="#shop-items">What can i buy with shells?</a>
                    </li>
                </ul>
            </nav>
            {/* title */}
            <div className="p-4" id="top">
                <img
                    src={think}
                    alt="Thinking"
                    className="h-25"
                    loading="lazy"
                />
                <h1 className="font-dynapuff text-4xl">
                    How does SoM voting work?
                </h1>
                <span>Quick explainer and tutorial how to get started</span>
                <div className="mt-5">
                    <h3 className="font-dynapuff text-lg">
                        Content of the page:
                    </h3>
                    <ul className="list-disc ml-6 underline font-dynapuff">
                        <li>
                            <a href="#pre-ship">Pre-ship checks</a>
                        </li>
                        <li>
                            <a href="#shipping">Shipping</a>
                        </li>
                        <li>
                            <a href="#approved">How to get approved faster</a>
                        </li>
                        <li>
                            <a href="#what-now">What happens now</a>
                        </li>
                        <li>
                            <a href="#limit-shells">
                                Limit on max shells you get per project
                            </a>
                        </li>
                        <li>
                            <a href="#shopping">
                                What can you buy with shells + shopping
                                calculator
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* How to ship */}
            <div
                className="bg-som-bg rounded-md shadow-md p-4"
                id="shipping"
                style={{ scrollMarginTop: "150px" }}
            >
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
                <h3
                    className="font-black text-2xl mt-4"
                    id="pre-ship"
                    style={{ scrollMarginTop: "150px" }}
                >
                    Before you ship
                </h3>
                <p className="">
                    First, assure that you have all this:
                    <br />
                </p>
                <ul className="list-disc ml-6 mb-2">
                    {optimizedChecks.map((check) => (
                        <li key={check.id}>
                            <input
                                type="checkbox"
                                id={check.id}
                                checked={check.value}
                                onChange={handleCheck}
                            />
                            <label htmlFor={check.id} className="ml-2">
                                {check.label}
                            </label>
                        </li>
                    ))}
                </ul>
                {showPopup && (
                    <AlertDialog open={showPopup}>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>
                                    Wow, you actually filled out the form
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                    So now you can ship your project propably. I
                                    reccomend having atleast 10 hours to get
                                    actually good payouts.{" "}
                                    <u>
                                        We totally didn't send your data to the
                                        Chinese CCP
                                    </u>{" "}
                                    Don't read the privacy policy We don't have
                                    one. Congrat's on trying to ship ur project
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel
                                    onClick={() => setShowPopup(false)}
                                >
                                    Cancel
                                </AlertDialogCancel>
                                <AlertDialogAction
                                    onClick={() => setShowPopup(false)}
                                >
                                    Ok, thanks
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                )}
                <span>
                    Important! You <b>need</b> to have a README.md file! If it's
                    empty you will get rejected! Quickly explain what the
                    project is and how can you run it inside
                </span>
                {/* Shipping */}
                <h3 className="font-black text-2xl mt-4" id="shipping-step">
                    <img src={cool} alt="" className="h-25" loading="lazy" />
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
                    <i>4. If you use ai in your project, people may not like it and not vote for it</i>
                </p>
                <div
                    className=""
                    id="shipping-step1"
                    style={{ scrollMarginTop: "150px" }}
                >
                    <h3 className="font-black text-2xl mt-4">
                        Step one: click this button
                    </h3>
                    <img
                        src={step1}
                        alt=""
                        className="rounded-md mt-2 shadow-md w-500"
                        loading="lazy"
                    />
                    <p className="mt-2">
                        Easy right? I think so too! That's the first step
                        completed! Right now you just opened the dialog to ship
                        your project. Now what's left is go through the form
                    </p>
                </div>
                <div
                    className=""
                    id="shipping-step2"
                    style={{ scrollMarginTop: "150px" }}
                >
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
                        loading="lazy"
                    />
                    <p className="my-4">
                        Clicked next? Great! Now we are at the step where we can
                        check if you really made your project ready to ship
                    </p>
                    <img
                        src={step3}
                        alt=""
                        className="rounded-md mt-2 shadow-md w-500"
                        loading="lazy"
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
            <div
                className="mt-20 p-4"
                id="what-now"
                style={{ scrollMarginTop: "150px" }}
            >
                {/* easterN egg */}
                <img
                    src={beg}
                    alt=""
                    className="h-25 hover:cursor-pointer hover:shadow-2xl"
                    loading="lazy"
                    onClick={() => setShowEasternEgg(true)}
                />
                <h1 className="font-dynapuff text-4xl">What happens now?</h1>
                <p>So when do i get my shells?</p>
            </div>
            {showEasternEgg && (
                <AlertDialog open={showEasternEgg}>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>
                                This is an eastern egg
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                                <img src={easterneurope} alt="" height={100} />
                                Welcome to eastern europe! <br />
                                If you don't behave well:{" "}
                                <i>We will send you here</i>
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel
                                onClick={() => setShowEasternEgg(false)}
                            >
                                Get tf out
                            </AlertDialogCancel>
                            <AlertDialogAction
                                onClick={() => setShowEasternEgg(false)}
                            >
                                Im scared
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            )}
            <div
                className="bg-som-bg rounded-md shadow-md mt-4 p-4"
                id="shopping"
                style={{ scrollMarginTop: "150px" }}
            >
                <p className="">
                    So you shipped a project, congrats! I will guess that this
                    is your first time shipping a project, so i want to guide
                    you throught the basics of voting. <br />
                </p>
                <p className="my-4 font-dynapuff text-xl underline">
                    - <a href="#approved">how to get approved faster</a> <br />-{" "}
                    <a href="#limit-shells">
                        limit on max shells you get per project
                    </a>{" "}
                    <br />
                    - what can you buy with shells + shopping calculator <br />
                </p>
            </div>
            <div
                className="mt-4 bg-som-bg p-4 rounded-md shadow-md"
                id="approved"
                style={{ scrollMarginTop: "150px" }}
            >
                <h3 className="font-dynapuff text-2xl ">
                    1. How to get approved faster?
                </h3>
                <p>So you want to get approved. But you lazy. What to do?</p>
                <p className="font-black text-lg underline">
                    People who vote a lot get approved faster!
                </p>
                <p>
                    Yes it's a genuine feature. They added it lately, the more
                    you vote the higher you go in the "review list"
                </p>
            </div>
            <div
                className="mt-4 bg-som-bg p-4 rounded-md shadow-md"
                id="limit-shells"
                style={{ scrollMarginTop: "150px" }}
            >
                <h3 className="font-dynapuff text-2xl ">
                    2. Limit on max shells you get per project
                </h3>
                <p>
                    To prevent oligarchs from getting the shells (and cheaters
                    who have 10 children)
                </p>
                <div>
                    You can only get a <u>max multiplier of 30x</u> <br />
                    That means you can only get 30x base shells. <br />
                    "Base shells" is the term i use to describe minimum amount
                    of shells. It get's calculated by rounding the time you
                    spent on your project up. <br />
                    For example: <br />
                    <div className="ml-4 mt-4">
                        If you spent 1 hour and 20 minutes on a project: the
                        <u className="ml-1">base</u> shells would be{" "}
                        <u>just 1 shell</u>. That means 30 shells max (pile of
                        stickers) <br />
                    </div>
                    <div className="ml-4 mt-4">
                        If you spent 1 hour and 30 minutes (only 10 more!) you
                        would get 2 base shells. That means 60 shells max
                        (that's a whole logic analyzer) <br />
                    </div>
                </div>
                <TimeCalculator />
            </div>
            <div
                className="mt-4 bg-som-bg p-4 rounded-md shadow-md"
                id="shop-items"
                style={{ scrollMarginTop: "150px" }}
            >
                <h3 className="font-dynapuff text-2xl ">3. What can i buy?</h3>
                <p>I have x shells what can i buy with it? Here's what</p>
                <WhatCanBuy />
            </div>
        </div>
    );
}

const MemoizedHow = memo(How);
export { MemoizedHow as How };
export default MemoizedHow;

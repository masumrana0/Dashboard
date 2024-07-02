"use client";
import { IReview } from "@/interface/review";
import React from "react";
import Review from "./Review";
import { useAppSelector } from "@/Redux/hooks";

const ReviewComponentPage = () => {
  const reviews: IReview[] = [
    {
      user: {
        name: { firstName: "Alex", lastName: "Johnson" },
        photo: "https://randomuser.me/api/portraits/men/1.jpg",
      },
      rating: 5.0,
      review:
        "Absolutely fantastic service! Will definitely recommend to friends and family.",
      timestamp: "2024-07-01 10:12 AM",
    },
    {
      user: {
        name: { firstName: "Maria", lastName: "Lopez" },
        photo: "https://randomuser.me/api/portraits/women/2.jpg",
      },
      rating: 4.0,
      review: "Good experience overall, but there’s room for improvement.",
      timestamp: "2024-07-01 11:35 AM",
    },
    {
      user: {
        name: { firstName: "John", lastName: "King" },
        photo: "https://randomuser.me/api/portraits/men/3.jpg",
      },
      rating: 5.0,
      review: "Great product and customer service!",
      timestamp: "2024-07-01 01:20 PM",
    },
    {
      user: {
        name: { firstName: "Sarah", lastName: "Smith" },
        photo: "https://randomuser.me/api/portraits/women/4.jpg",
      },
      rating: 3.5,
      review: "Decent, but expected more from this brand.",
      timestamp: "2024-07-01 02:45 PM",
    },
    {
      user: {
        name: { firstName: "David", lastName: "Brown" },
        photo: "https://randomuser.me/api/portraits/men/5.jpg",
      },
      rating: 4.5,
      review: "Very satisfied with my purchase.",
      timestamp: "2024-07-01 03:10 PM",
    },
    {
      user: {
        name: { firstName: "Emily", lastName: "Davis" },
        photo: "https://randomuser.me/api/portraits/women/6.jpg",
      },
      rating: 2.0,
      review: "Not what I expected, quite disappointing.",
      timestamp: "2024-07-01 03:50 PM",
    },
    {
      user: {
        name: { firstName: "Michael", lastName: "Wilson" },
        photo: "https://randomuser.me/api/portraits/men/7.jpg",
      },
      rating: 4.0,
      review: "Good quality, will buy again.",
      timestamp: "2024-07-01 04:25 PM",
    },
    {
      user: {
        name: { firstName: "Jessica", lastName: "Moore" },
        photo: "https://randomuser.me/api/portraits/women/8.jpg",
      },
      rating: 5.0,
      review: "Exceeded my expectations, amazing!",
      timestamp: "2024-07-01 05:00 PM",
    },
    {
      user: {
        name: { firstName: "Daniel", lastName: "Taylor" },
        photo: "https://randomuser.me/api/portraits/men/9.jpg",
      },
      rating: 3.0,
      review: "It’s okay, nothing special.",
      timestamp: "2024-07-01 06:15 PM",
    },
    {
      user: {
        name: { firstName: "Laura", lastName: "Anderson" },
        photo: "https://randomuser.me/api/portraits/women/10.jpg",
      },
      rating: 4.5,
      review: "Great value for money.",
      timestamp: "2024-07-01 07:20 PM",
    },
    {
      user: {
        name: { firstName: "Matthew", lastName: "Thomas" },
        photo: "https://randomuser.me/api/portraits/men/11.jpg",
      },
      rating: 2.5,
      review: "Could be better, had some issues.",
      timestamp: "2024-07-01 08:30 PM",
    },
    {
      user: {
        name: { firstName: "Karen", lastName: "Harris" },
        photo: "https://randomuser.me/api/portraits/women/12.jpg",
      },
      rating: 5.0,
      review: "Absolutely love it! Highly recommend.",
      timestamp: "2024-07-01 09:10 PM",
    },
    {
      user: {
        name: { firstName: "Chris", lastName: "Martinez" },
        photo: "https://randomuser.me/api/portraits/men/13.jpg",
      },
      rating: 3.5,
      review: "It’s okay, but I’ve seen better.",
      timestamp: "2024-07-01 10:45 PM",
    },
    {
      user: {
        name: { firstName: "Amanda", lastName: "Garcia" },
        photo: "https://randomuser.me/api/portraits/women/14.jpg",
      },
      rating: 4.0,
      review: "Very good, I’m satisfied.",
      timestamp: "2024-07-01 11:30 PM",
    },
    {
      user: {
        name: { firstName: "Brian", lastName: "Martinez" },
        photo: "https://randomuser.me/api/portraits/men/15.jpg",
      },
      rating: 3.0,
      review: "Average experience.",
      timestamp: "2024-07-01 11:50 PM",
    },
    {
      user: {
        name: { firstName: "Rachel", lastName: "Lee" },
        photo: "https://randomuser.me/api/portraits/women/16.jpg",
      },
      rating: 4.5,
      review: "Very pleased with my purchase.",
      timestamp: "2024-07-02 12:15 AM",
    },
    {
      user: {
        name: { firstName: "James", lastName: "Clark" },
        photo: "https://randomuser.me/api/portraits/men/17.jpg",
      },
      rating: 4.0,
      review: "Good quality, will buy again.",
      timestamp: "2024-07-02 01:20 AM",
    },
    {
      user: {
        name: { firstName: "Sophia", lastName: "Rodriguez" },
        photo: "https://randomuser.me/api/portraits/women/18.jpg",
      },
      rating: 5.0,
      review: "Amazing product, highly recommend!",
      timestamp: "2024-07-02 02:45 AM",
    },
    {
      user: {
        name: { firstName: "Andrew", lastName: "Lewis" },
        photo: "https://randomuser.me/api/portraits/men/19.jpg",
      },
      rating: 2.0,
      review: "Not satisfied, would not buy again.",
      timestamp: "2024-07-02 03:55 AM",
    },
    {
      user: {
        name: { firstName: "Linda", lastName: "Walker" },
        photo: "https://randomuser.me/api/portraits/women/20.jpg",
      },
      rating: 3.5,
      review: "It’s okay, but there are better options out there.",
      timestamp: "2024-07-02 04:30 AM",
    },
  ];

  const layoutState = useAppSelector((state) => state.layoutSlice.layoutState);
  return (
    <div
      className={`  p-3 md:p-5 lg:p-10 ${
        layoutState && "container mx-auto"
      } overflow-hidden `}
    >
      <h2 className="text-gray-700 dark:text-gray-50 text-xl font-bold">
        Reivew
      </h2>

      <section className="mt-8  flex flex-wrap gap-5 lg:gap-10 items-center justify-center    overflow-y-auto  py-10 md:py-5 h-[calc(100vh-150px)]  md:h-[calc(100vh-250px)] no-scrollbar ">
        {reviews?.map((review: IReview, index: number) => (
          <Review review={review as IReview} key={index} />
        ))}
        {/* <Review review={reviews[0] as IReview} /> */}
      </section>
    </div>
  );
};

export default ReviewComponentPage;

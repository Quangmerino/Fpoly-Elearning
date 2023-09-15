"use client";

import Apply from "@/components/Membership/Apply";
import CoachingLessons from "@/components/Membership/CoachingLessons";
import Pricing from "@/components/Membership/Pricing";
import Review from "@/components/Membership/Review";
import React from "react";

function MembershipPage() {
  return (
    <div>
      <Pricing />
      <CoachingLessons />
      <Review />
      <Apply />
    </div>
  );
}

export default MembershipPage;

import React from 'react'
import Policy from '../components/Policy';
import Terms from '../components/Terms';
import PageWrapper from '../components/PageWrapper';

export default function PolicyAndTerms() {
  return (
    <PageWrapper>
      <div className="w-full pt-24 pb-8 px-4 md:px-12 flex justify-center items-start">
        <div className="w-full max-w-5xl bg-gray-50 rounded-xl shadow-2xl border border-gray-200 p-2 md:p-6">
          
          {/* Policy Section */}
          <div className="-mt-16">
            <Policy />
          </div>

          {/* Separator */}
          <div className="flex items-center justify-center my-12 w-[90%] mx-auto">
            <div className="h-px bg-gray-300 flex-1"></div>
            <span className="px-4 text-gray-400 font-bold text-lg tracking-widest uppercase">Terms of Service</span>
            <div className="h-px bg-gray-300 flex-1"></div>
          </div>

          {/* Terms Section */}
          <div className="-mt-24">
            <Terms />
          </div>

          <div className="pb-12"></div>
        </div>
      </div>
    </PageWrapper>
  )
}

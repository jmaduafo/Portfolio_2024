import React from 'react'
import { items } from '@/utils/resume';
import Paragraph from '../Paragraph';
import MainButton from '../MainButton';

function Resume() {
  return (
    <section className="mt-[6vh] border-b-[1px] border-b-lightText20 dark:border-b-darkText20 md:border-none">
        {items.map((item, l) => {
          return (
            <div
              className="flex flex-col md:flex-row gap-5 border-t-[1px] border-t-lightText20 dark:border-t-darkText20 md:border-none"
              key={item.category}
            >
              <div className="flex-1 py-5">
                <Paragraph text={item.category} />
              </div>
              <div
                className={`flex-[3] md:border-t-[1px] md:border-t-lightText20 md:dark:border-t-darkText20 ${
                  l === items.length - 1 &&
                  "md:border-b-[1px] md:border-b-lightText20 md:dark:border-b-darkText20"
                } md:px-3 py-5`}
              >
                {item.list.map((list, i) => {
                  return (
                    <div
                      key={list.institution}
                      className={`${
                        i !== item.list.length - 1 ? "mb-8" : "mb-0"
                      } flex items-start justify-between gap-8`}
                    >
                      <div>
                        <p className="text-[16px] md:text-[18px]">
                          {list.institution},{" "}
                          <span className="italic">{list.location}</span>
                        </p>
                        <div>
                          <p className="text-[12px] md:text-[13.5px]">
                            {list.role
                              ? list.role
                              : `${list.primary_qualification}, ${list.primary_concentration}`}
                          </p>
                          {list.secondary_concentration ? (
                            <p className="text-[12px] md:text-[13.5px]">{`${list.secondary_qualification}, ${list.secondary_concentration}`}</p>
                          ) : null}
                        </div>
                      </div>
                      <p className="text-[13px] md:text-[16px]">
                        {list.duration}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div className="flex justify-end mt-8">
          <div>
            <MainButton text="View Full Resume" />
          </div>
        </div>
      </section>
  )
}

export default Resume
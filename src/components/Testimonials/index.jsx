import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import Link from "next/link";

const Testimonials = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [ref4, inView4] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <div className="px-5 md:px-10 py-10">
      <motion.div
        ref={ref1}
        initial="hidden"
        animate={inView1 ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5 }}>
        <h2 className="text-2xl leading-normal mb-2 text-center capitalize font-bold">
          Proof of our viral results.{" "}
        </h2>
        <p className="text-gray-400 mb-10 text-sm md:text-base leading-relaxed font-light text-center max-w-xl mx-auto pb-2">
          Today, applying the same viral strategy (upgraded), we’ve helped over
          10+ clients grow their authority by 50,000 to 100,000 followers in
          just 4-12 months. Thus, helping their unique message impact millions!
          (and earning them 100,000’s of $ in the process). We can help you do
          the same.
        </p>
      </motion.div>
      <div id="testimonials" className="row overflow-hidden">
        <motion.div
          ref={ref1}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5 }}
          className="col col-lg-4 col-md-12">
          <div className="testimonial-card-wrapper _3">
            <div className="testimonial---top-row george">
              <div className="testimonial-stats">
                <div className="stat-wrapper _1" style={{ opacity: 1 }}>
                  <div className="display-text---small">from</div>
                  <div className="h5 text-colour---orange">59k</div>
                  {/* <div className="display-text---small">
                  Earnings
                  <br />
                  per month
                </div> */}
                </div>
                <svg
                  className="testimonial-arrow"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  viewBox="0 0 82 24"
                  fill="none"
                  style={{
                    opacity: 1,
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M71.7647 1.39247L81.3107 10.9384C81.8964 11.5242 81.8964 12.4739 81.3107 13.0597L71.7647 22.6057C71.1789 23.1915 70.2292 23.1915 69.6434 22.6057C69.0576 22.0199 69.0576 21.0701 69.6434 20.4843L76.6287 13.4991H0.25V10.4991H76.6287L69.6434 3.51379C69.0576 2.928 69.0576 1.97825 69.6434 1.39247C70.2292 0.806678 71.1789 0.806678 71.7647 1.39247Z"
                    fill="currentColor"
                  />
                </svg>
                <div className="stat-wrapper right" style={{ opacity: 1 }}>
                  <div className="display-text---small">to over</div>
                  <div className="h5 text-colour---orange">172k+</div>
                  <div className="display-text---small">in 5 months</div>
                </div>
              </div>
            </div>
            <div className="testimonial---bottom-row">
              <div className="testimonial-blur"></div>
              <div className="testimonial---content">
                <svg
                  className="quotation-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  viewBox="0 0 52 43"
                  fill="none">
                  <path
                    d="M9.45598 12.7145L9.45595 12.7144L9.45235 12.7198C7.89073 15.0271 7.0849 17.7626 7.14602 20.5477C7.04323 22.0093 7.42241 23.4645 8.22575 24.6903C8.49788 25.1221 8.87147 25.4808 9.31401 25.7351C9.75806 25.9904 10.2579 26.1327 10.7698 26.1497L10.7959 26.1506L10.8218 26.1487C11.6681 26.0887 12.4978 25.8839 13.2748 25.5434C14.3786 25.1309 15.5401 24.8936 16.7172 24.84C17.7334 24.8427 18.7389 25.0475 19.6752 25.4425C20.615 25.8391 21.4661 26.4194 22.1786 27.1493L22.1849 27.1556L22.1913 27.1618C22.9711 27.9057 23.5863 28.8049 23.9972 29.8013C24.4081 30.7977 24.6054 31.8692 24.5766 32.9466L24.576 32.9685L24.5774 32.9904C24.6461 34.1192 24.4681 35.2495 24.056 36.3027C23.6446 37.3538 23.0096 38.303 22.1952 39.0845C20.043 41.0389 17.2303 42.1057 14.3232 42.07C12.4997 42.0453 10.7027 41.6306 9.05275 40.8537C7.40283 40.0769 5.93827 38.956 4.75747 37.5662L4.7503 37.5578L4.74276 37.5497C1.91105 34.5014 0.38968 30.463 0.506236 26.304L0.506432 26.304V26.29C0.506432 19.9689 2.85981 14.1993 7.60543 8.96741C10.6511 5.66484 15.0342 2.90986 20.7864 0.720411V3.2495C15.3112 6.60543 11.5132 9.75722 9.45598 12.7145ZM36.196 12.7145L36.1959 12.7144L36.1924 12.7198C34.6307 15.0271 33.8249 17.7626 33.886 20.5477C33.7832 22.0091 34.1623 23.4642 34.9655 24.6899C35.237 25.1225 35.6105 25.4818 36.0533 25.7363C36.4978 25.9918 36.9984 26.1338 37.5108 26.1498L37.5369 26.1506L37.5628 26.1487C38.4084 26.087 39.2373 25.8823 40.0144 25.5435C41.1138 25.1324 42.2706 24.8952 43.4431 24.8402C45.5564 24.8839 47.5679 25.7582 49.0416 27.2742C50.5191 28.794 51.3367 30.8357 51.3165 32.9552L51.3163 32.9724L51.3173 32.9895C51.3841 34.1185 51.2053 35.2484 50.7931 36.3015C50.3819 37.3522 49.7482 38.3014 48.9356 39.084C46.7654 41.0386 43.9352 42.0985 41.0147 42.0501L41.0129 42.05C39.1893 42.0265 37.3919 41.6124 35.7419 40.8355C34.0919 40.0587 32.6276 38.9371 31.4477 37.5465L31.4407 37.5383L31.4334 37.5304C28.6135 34.4838 27.0996 30.4537 27.2162 26.3041L27.2164 26.3041V26.29C27.2164 19.9691 29.5696 14.1998 34.3148 8.96806C37.38 5.66501 41.767 2.91016 47.5064 0.720951V3.24985C42.0442 6.60581 38.253 9.75753 36.196 12.7145Z"
                    stroke="currentColor"></path>
                </svg>
                <p className="paragraph---regular text-colour---white text-weight---regular">
                  {'"The social media genius."'}
                </p>
              </div>
              <div className="testimonial-details-wrapper flex-col !gap-2  !items-start ">
                <div className="testimonial---name-wrapper">
                  <div className="display-text---medium text---no-wrap">
                    <strong>Pat Burgener</strong>
                  </div>
                  <div className="caption---xxsmall opacity---80">
                    Olympic Snowboarder
                  </div>
                  <div className="verified-name-wrapper">
                    <div className="caption---xxsmall opacity---80">
                      @patburgener
                    </div>
                    <svg
                      className="verified-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      viewBox="0 0 18 19"
                      fill="none">
                      <path
                        className="icon---ribbon"
                        d="M8.85517 0.778366C8.92538 0.677503 9.07462 0.677503 9.14483 0.778366L10.2953 2.43104C10.3495 2.50888 10.4555 2.52997 10.5354 2.47879L12.2307 1.39219C12.3342 1.32587 12.4721 1.38298 12.4983 1.50304L12.9288 3.47018C12.9491 3.56283 13.0389 3.62288 13.1323 3.60616L15.1144 3.25106C15.2354 3.22938 15.3409 3.33491 15.3193 3.45588L14.9642 5.43801C14.9474 5.53136 15.0075 5.62124 15.1001 5.64152L17.0673 6.07197C17.1873 6.09824 17.2444 6.23612 17.1781 6.33959L16.0915 8.03494C16.0403 8.11479 16.0614 8.22081 16.1393 8.275L17.7919 9.42548C17.8928 9.49569 17.8928 9.64493 17.7919 9.71515L16.1393 10.8656C16.0614 10.9198 16.0403 11.0258 16.0915 11.1057L17.1781 12.801C17.2444 12.9045 17.1873 13.0424 17.0673 13.0687L15.1001 13.4991C15.0075 13.5194 14.9474 13.6093 14.9642 13.7026L15.3193 15.6847C15.3409 15.8057 15.2354 15.9112 15.1144 15.8896L13.1323 15.5345C13.0389 15.5177 12.9491 15.5778 12.9288 15.6704L12.4983 17.6376C12.4721 17.7576 12.3342 17.8148 12.2307 17.7484L10.5354 16.6618C10.4555 16.6107 10.3495 16.6317 10.2953 16.7096L9.14483 18.3623C9.07462 18.4631 8.92538 18.4631 8.85517 18.3623L7.70469 16.7096C7.6505 16.6317 7.54448 16.6107 7.46463 16.6618L5.76928 17.7484C5.66581 17.8148 5.52793 17.7576 5.50166 17.6376L5.07121 15.6704C5.05093 15.5778 4.96105 15.5177 4.86769 15.5345L2.88557 15.8896C2.7646 15.9112 2.65907 15.8057 2.68074 15.6847L3.03585 13.7026C3.05257 13.6093 2.99252 13.5194 2.89987 13.4991L0.932726 13.0687C0.81267 13.0424 0.75556 12.9045 0.821876 12.801L1.90848 11.1057C1.95965 11.0258 1.93857 10.9198 1.86073 10.8656L0.208054 9.71515C0.10719 9.64493 0.10719 9.49569 0.208054 9.42548L1.86073 8.275C1.93857 8.22081 1.95965 8.11479 1.90848 8.03494L0.821876 6.33959C0.75556 6.23612 0.812671 6.09824 0.932726 6.07197L2.89987 5.64152C2.99252 5.62124 3.05257 5.53136 3.03585 5.43801L2.68074 3.45588C2.65907 3.33491 2.7646 3.22938 2.88557 3.25106L4.86769 3.60616C4.96105 3.62288 5.05093 3.56283 5.07121 3.47018L5.50166 1.50304C5.52793 1.38298 5.66581 1.32587 5.76928 1.39219L7.46463 2.47879C7.54448 2.52997 7.6505 2.50888 7.70469 2.43104L8.85517 0.778366Z"
                        fill="currentColor"></path>
                      <path
                        d="M12.5067 8.4409L8.60229 12.345C8.55712 12.3901 8.50348 12.426 8.44445 12.4504C8.38542 12.4749 8.32215 12.4875 8.25826 12.4875C8.19436 12.4875 8.13109 12.4749 8.07206 12.4504C8.01303 12.426 7.9594 12.3901 7.91422 12.345L5.73658 10.1558C5.64551 10.0646 5.59436 9.94093 5.59436 9.81203C5.59436 9.68314 5.64551 9.55951 5.73658 9.4683L6.46631 8.73857C6.55723 8.64763 6.68047 8.59638 6.80906 8.59604C6.93766 8.5957 7.06116 8.64629 7.15256 8.73675L8.26662 9.80914L8.26996 9.81249L11.0895 7.03435C11.1806 6.94355 11.3041 6.89258 11.4327 6.89258C11.5614 6.89258 11.6848 6.94355 11.776 7.03435L12.5057 7.7507C12.5513 7.79585 12.5875 7.84957 12.6122 7.90877C12.6369 7.96796 12.6497 8.03146 12.6498 8.09561C12.6499 8.15976 12.6373 8.22329 12.6127 8.28255C12.5881 8.34181 12.5521 8.39563 12.5067 8.4409Z"
                        fill="currentColor"></path>
                    </svg>
                  </div>
                </div>
                <div className="community-size text---no-wrap scale-90 ben  mt-1 -ml-2 ">
                  <Link
                    target="_blank"
                    className="flex items-center gap-1"
                    href={"https://www.instagram.com/patburgener/"}>
                    <FaInstagram size={20} /> <span>Instagram</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={ref2}
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5 }}
          className="col col-lg-4 col-md-12">
          <div className="testimonial-card-wrapper _3">
            <div className="testimonial---top-row steven">
              <div className="testimonial-stats">
                <div className="stat-wrapper _1" style={{ opacity: 1 }}>
                  <div className="display-text---small">from</div>
                  <div className="h5 text-colour---orange">0</div>
                  {/* <div className="display-text---small">
                  Earnings
                  <br />
                  per month
                </div> */}
                </div>
                <svg
                  className="testimonial-arrow"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  viewBox="0 0 82 24"
                  fill="none"
                  style={{
                    opacity: 1,
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M71.7647 1.39247L81.3107 10.9384C81.8964 11.5242 81.8964 12.4739 81.3107 13.0597L71.7647 22.6057C71.1789 23.1915 70.2292 23.1915 69.6434 22.6057C69.0576 22.0199 69.0576 21.0701 69.6434 20.4843L76.6287 13.4991H0.25V10.4991H76.6287L69.6434 3.51379C69.0576 2.928 69.0576 1.97825 69.6434 1.39247C70.2292 0.806678 71.1789 0.806678 71.7647 1.39247Z"
                    fill="currentColor"
                  />
                </svg>
                <div className="stat-wrapper right" style={{ opacity: 1 }}>
                  <div className="display-text---small">to over</div>
                  <div className="h5 text-colour---orange">100K+</div>
                  <div className="display-text---small">in 5 months</div>
                </div>
              </div>
            </div>
            <div className="testimonial---bottom-row">
              <div className="testimonial-blur"></div>
              <div className="testimonial---content">
                <svg
                  className="quotation-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  viewBox="0 0 52 43"
                  fill="none">
                  <path
                    d="M9.45598 12.7145L9.45595 12.7144L9.45235 12.7198C7.89073 15.0271 7.0849 17.7626 7.14602 20.5477C7.04323 22.0093 7.42241 23.4645 8.22575 24.6903C8.49788 25.1221 8.87147 25.4808 9.31401 25.7351C9.75806 25.9904 10.2579 26.1327 10.7698 26.1497L10.7959 26.1506L10.8218 26.1487C11.6681 26.0887 12.4978 25.8839 13.2748 25.5434C14.3786 25.1309 15.5401 24.8936 16.7172 24.84C17.7334 24.8427 18.7389 25.0475 19.6752 25.4425C20.615 25.8391 21.4661 26.4194 22.1786 27.1493L22.1849 27.1556L22.1913 27.1618C22.9711 27.9057 23.5863 28.8049 23.9972 29.8013C24.4081 30.7977 24.6054 31.8692 24.5766 32.9466L24.576 32.9685L24.5774 32.9904C24.6461 34.1192 24.4681 35.2495 24.056 36.3027C23.6446 37.3538 23.0096 38.303 22.1952 39.0845C20.043 41.0389 17.2303 42.1057 14.3232 42.07C12.4997 42.0453 10.7027 41.6306 9.05275 40.8537C7.40283 40.0769 5.93827 38.956 4.75747 37.5662L4.7503 37.5578L4.74276 37.5497C1.91105 34.5014 0.38968 30.463 0.506236 26.304L0.506432 26.304V26.29C0.506432 19.9689 2.85981 14.1993 7.60543 8.96741C10.6511 5.66484 15.0342 2.90986 20.7864 0.720411V3.2495C15.3112 6.60543 11.5132 9.75722 9.45598 12.7145ZM36.196 12.7145L36.1959 12.7144L36.1924 12.7198C34.6307 15.0271 33.8249 17.7626 33.886 20.5477C33.7832 22.0091 34.1623 23.4642 34.9655 24.6899C35.237 25.1225 35.6105 25.4818 36.0533 25.7363C36.4978 25.9918 36.9984 26.1338 37.5108 26.1498L37.5369 26.1506L37.5628 26.1487C38.4084 26.087 39.2373 25.8823 40.0144 25.5435C41.1138 25.1324 42.2706 24.8952 43.4431 24.8402C45.5564 24.8839 47.5679 25.7582 49.0416 27.2742C50.5191 28.794 51.3367 30.8357 51.3165 32.9552L51.3163 32.9724L51.3173 32.9895C51.3841 34.1185 51.2053 35.2484 50.7931 36.3015C50.3819 37.3522 49.7482 38.3014 48.9356 39.084C46.7654 41.0386 43.9352 42.0985 41.0147 42.0501L41.0129 42.05C39.1893 42.0265 37.3919 41.6124 35.7419 40.8355C34.0919 40.0587 32.6276 38.9371 31.4477 37.5465L31.4407 37.5383L31.4334 37.5304C28.6135 34.4838 27.0996 30.4537 27.2162 26.3041L27.2164 26.3041V26.29C27.2164 19.9691 29.5696 14.1998 34.3148 8.96806C37.38 5.66501 41.767 2.91016 47.5064 0.720951V3.24985C42.0442 6.60581 38.253 9.75753 36.196 12.7145Z"
                    stroke="currentColor"></path>
                </svg>
                <p className="paragraph---regular text-colour---white text-weight---regular">
                  {
                    '"MG Media is success. It promises honesty and always over-delivers. That’s a rare gem nowadays."'
                  }
                </p>
              </div>
              <div className="testimonial-details-wrapper flex-col !gap-2  !items-start ">
                <div className="testimonial---name-wrapper">
                  <div className="display-text---medium text---no-wrap">
                    <strong>Amir Eid</strong>
                  </div>
                  <div className="caption---xxsmall opacity---80">
                    Pro Athlete Trainers{" "}
                  </div>
                  <div className="verified-name-wrapper">
                    <div className="caption---xxsmall opacity---80">
                      @amireidofficial
                    </div>
                    <svg
                      className="verified-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      viewBox="0 0 18 19"
                      fill="none">
                      <path
                        className="icon---ribbon"
                        d="M8.85517 0.778366C8.92538 0.677503 9.07462 0.677503 9.14483 0.778366L10.2953 2.43104C10.3495 2.50888 10.4555 2.52997 10.5354 2.47879L12.2307 1.39219C12.3342 1.32587 12.4721 1.38298 12.4983 1.50304L12.9288 3.47018C12.9491 3.56283 13.0389 3.62288 13.1323 3.60616L15.1144 3.25106C15.2354 3.22938 15.3409 3.33491 15.3193 3.45588L14.9642 5.43801C14.9474 5.53136 15.0075 5.62124 15.1001 5.64152L17.0673 6.07197C17.1873 6.09824 17.2444 6.23612 17.1781 6.33959L16.0915 8.03494C16.0403 8.11479 16.0614 8.22081 16.1393 8.275L17.7919 9.42548C17.8928 9.49569 17.8928 9.64493 17.7919 9.71515L16.1393 10.8656C16.0614 10.9198 16.0403 11.0258 16.0915 11.1057L17.1781 12.801C17.2444 12.9045 17.1873 13.0424 17.0673 13.0687L15.1001 13.4991C15.0075 13.5194 14.9474 13.6093 14.9642 13.7026L15.3193 15.6847C15.3409 15.8057 15.2354 15.9112 15.1144 15.8896L13.1323 15.5345C13.0389 15.5177 12.9491 15.5778 12.9288 15.6704L12.4983 17.6376C12.4721 17.7576 12.3342 17.8148 12.2307 17.7484L10.5354 16.6618C10.4555 16.6107 10.3495 16.6317 10.2953 16.7096L9.14483 18.3623C9.07462 18.4631 8.92538 18.4631 8.85517 18.3623L7.70469 16.7096C7.6505 16.6317 7.54448 16.6107 7.46463 16.6618L5.76928 17.7484C5.66581 17.8148 5.52793 17.7576 5.50166 17.6376L5.07121 15.6704C5.05093 15.5778 4.96105 15.5177 4.86769 15.5345L2.88557 15.8896C2.7646 15.9112 2.65907 15.8057 2.68074 15.6847L3.03585 13.7026C3.05257 13.6093 2.99252 13.5194 2.89987 13.4991L0.932726 13.0687C0.81267 13.0424 0.75556 12.9045 0.821876 12.801L1.90848 11.1057C1.95965 11.0258 1.93857 10.9198 1.86073 10.8656L0.208054 9.71515C0.10719 9.64493 0.10719 9.49569 0.208054 9.42548L1.86073 8.275C1.93857 8.22081 1.95965 8.11479 1.90848 8.03494L0.821876 6.33959C0.75556 6.23612 0.812671 6.09824 0.932726 6.07197L2.89987 5.64152C2.99252 5.62124 3.05257 5.53136 3.03585 5.43801L2.68074 3.45588C2.65907 3.33491 2.7646 3.22938 2.88557 3.25106L4.86769 3.60616C4.96105 3.62288 5.05093 3.56283 5.07121 3.47018L5.50166 1.50304C5.52793 1.38298 5.66581 1.32587 5.76928 1.39219L7.46463 2.47879C7.54448 2.52997 7.6505 2.50888 7.70469 2.43104L8.85517 0.778366Z"
                        fill="currentColor"></path>
                      <path
                        d="M12.5067 8.4409L8.60229 12.345C8.55712 12.3901 8.50348 12.426 8.44445 12.4504C8.38542 12.4749 8.32215 12.4875 8.25826 12.4875C8.19436 12.4875 8.13109 12.4749 8.07206 12.4504C8.01303 12.426 7.9594 12.3901 7.91422 12.345L5.73658 10.1558C5.64551 10.0646 5.59436 9.94093 5.59436 9.81203C5.59436 9.68314 5.64551 9.55951 5.73658 9.4683L6.46631 8.73857C6.55723 8.64763 6.68047 8.59638 6.80906 8.59604C6.93766 8.5957 7.06116 8.64629 7.15256 8.73675L8.26662 9.80914L8.26996 9.81249L11.0895 7.03435C11.1806 6.94355 11.3041 6.89258 11.4327 6.89258C11.5614 6.89258 11.6848 6.94355 11.776 7.03435L12.5057 7.7507C12.5513 7.79585 12.5875 7.84957 12.6122 7.90877C12.6369 7.96796 12.6497 8.03146 12.6498 8.09561C12.6499 8.15976 12.6373 8.22329 12.6127 8.28255C12.5881 8.34181 12.5521 8.39563 12.5067 8.4409Z"
                        fill="currentColor"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-2 items-center">
                  <div className="community-size text---no-wrap scale-90 ben  mt-1 -ml-2 ">
                    <Link
                      target="_blank"
                      className="flex items-center gap-1"
                      href={
                        "https://www.tiktok.com/@amireidofficial?_t=8m83WVtEceW&_r=1"
                      }>
                      <FaTiktok size={20} /> <span>TikTok</span>
                    </Link>
                  </div>
                  <div className="community-size text---no-wrap scale-90 ben  mt-1 -ml-2 ">
                    <Link
                      target="_blank"
                      className="flex items-center gap-1"
                      href={
                        "https://www.instagram.com/amireidofficial?igsh=MWdqN3JjemtpNjFiYg=="
                      }>
                      <FaInstagram size={20} /> <span>Instagram</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={ref3}
          initial="hidden"
          animate={inView3 ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5 }}
          className="col col-lg-4 col-md-12">
          <div className="testimonial-card-wrapper _3">
            <div className="testimonial---top-row ben">
              <div className="testimonial-stats">
                <div className="stat-wrapper _1" style={{ opacity: 1 }}>
                  <div className="display-text---small">from</div>
                  <div className="h5 text-colour---orange">25k</div>
                  {/* <div className="display-text---small">
                  Earnings
                  <br />
                  per month
                </div> */}
                </div>
                <svg
                  className="testimonial-arrow"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  viewBox="0 0 82 24"
                  fill="none"
                  style={{
                    opacity: 1,
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M71.7647 1.39247L81.3107 10.9384C81.8964 11.5242 81.8964 12.4739 81.3107 13.0597L71.7647 22.6057C71.1789 23.1915 70.2292 23.1915 69.6434 22.6057C69.0576 22.0199 69.0576 21.0701 69.6434 20.4843L76.6287 13.4991H0.25V10.4991H76.6287L69.6434 3.51379C69.0576 2.928 69.0576 1.97825 69.6434 1.39247C70.2292 0.806678 71.1789 0.806678 71.7647 1.39247Z"
                    fill="currentColor"
                  />
                </svg>
                <div className="stat-wrapper right" style={{ opacity: 1 }}>
                  <div className="display-text---small">to over</div>
                  <div className="h5 text-colour---orange">100K+</div>
                  <div className="display-text---small">in 4 months</div>
                </div>
              </div>
            </div>
            <div className="testimonial---bottom-row">
              <div className="testimonial-blur"></div>
              <div className="testimonial---content">
                <svg
                  className="quotation-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  viewBox="0 0 52 43"
                  fill="none">
                  <path
                    d="M9.45598 12.7145L9.45595 12.7144L9.45235 12.7198C7.89073 15.0271 7.0849 17.7626 7.14602 20.5477C7.04323 22.0093 7.42241 23.4645 8.22575 24.6903C8.49788 25.1221 8.87147 25.4808 9.31401 25.7351C9.75806 25.9904 10.2579 26.1327 10.7698 26.1497L10.7959 26.1506L10.8218 26.1487C11.6681 26.0887 12.4978 25.8839 13.2748 25.5434C14.3786 25.1309 15.5401 24.8936 16.7172 24.84C17.7334 24.8427 18.7389 25.0475 19.6752 25.4425C20.615 25.8391 21.4661 26.4194 22.1786 27.1493L22.1849 27.1556L22.1913 27.1618C22.9711 27.9057 23.5863 28.8049 23.9972 29.8013C24.4081 30.7977 24.6054 31.8692 24.5766 32.9466L24.576 32.9685L24.5774 32.9904C24.6461 34.1192 24.4681 35.2495 24.056 36.3027C23.6446 37.3538 23.0096 38.303 22.1952 39.0845C20.043 41.0389 17.2303 42.1057 14.3232 42.07C12.4997 42.0453 10.7027 41.6306 9.05275 40.8537C7.40283 40.0769 5.93827 38.956 4.75747 37.5662L4.7503 37.5578L4.74276 37.5497C1.91105 34.5014 0.38968 30.463 0.506236 26.304L0.506432 26.304V26.29C0.506432 19.9689 2.85981 14.1993 7.60543 8.96741C10.6511 5.66484 15.0342 2.90986 20.7864 0.720411V3.2495C15.3112 6.60543 11.5132 9.75722 9.45598 12.7145ZM36.196 12.7145L36.1959 12.7144L36.1924 12.7198C34.6307 15.0271 33.8249 17.7626 33.886 20.5477C33.7832 22.0091 34.1623 23.4642 34.9655 24.6899C35.237 25.1225 35.6105 25.4818 36.0533 25.7363C36.4978 25.9918 36.9984 26.1338 37.5108 26.1498L37.5369 26.1506L37.5628 26.1487C38.4084 26.087 39.2373 25.8823 40.0144 25.5435C41.1138 25.1324 42.2706 24.8952 43.4431 24.8402C45.5564 24.8839 47.5679 25.7582 49.0416 27.2742C50.5191 28.794 51.3367 30.8357 51.3165 32.9552L51.3163 32.9724L51.3173 32.9895C51.3841 34.1185 51.2053 35.2484 50.7931 36.3015C50.3819 37.3522 49.7482 38.3014 48.9356 39.084C46.7654 41.0386 43.9352 42.0985 41.0147 42.0501L41.0129 42.05C39.1893 42.0265 37.3919 41.6124 35.7419 40.8355C34.0919 40.0587 32.6276 38.9371 31.4477 37.5465L31.4407 37.5383L31.4334 37.5304C28.6135 34.4838 27.0996 30.4537 27.2162 26.3041L27.2164 26.3041V26.29C27.2164 19.9691 29.5696 14.1998 34.3148 8.96806C37.38 5.66501 41.767 2.91016 47.5064 0.720951V3.24985C42.0442 6.60581 38.253 9.75753 36.196 12.7145Z"
                    stroke="currentColor"></path>
                </svg>
                <p className="paragraph---regular text-colour---white text-weight---regular">
                  {
                    '"This is my number one recommendation for people who want to build a personal brand online."'
                  }
                </p>
              </div>
              <div className="testimonial-details-wrapper flex-col !gap-2  !items-start ">
                <div className="testimonial---name-wrapper">
                  <div className="display-text---medium text---no-wrap">
                    <strong>Sarah Atcho</strong>
                  </div>
                  <div className="caption---xxsmall opacity---80">
                    Olympic sprinter{" "}
                  </div>
                  <div className="verified-name-wrapper">
                    <div className="caption---xxsmall opacity---80">
                      @sarah_atcho
                    </div>
                    <svg
                      className="verified-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      viewBox="0 0 18 19"
                      fill="none">
                      <path
                        className="icon---ribbon"
                        d="M8.85517 0.778366C8.92538 0.677503 9.07462 0.677503 9.14483 0.778366L10.2953 2.43104C10.3495 2.50888 10.4555 2.52997 10.5354 2.47879L12.2307 1.39219C12.3342 1.32587 12.4721 1.38298 12.4983 1.50304L12.9288 3.47018C12.9491 3.56283 13.0389 3.62288 13.1323 3.60616L15.1144 3.25106C15.2354 3.22938 15.3409 3.33491 15.3193 3.45588L14.9642 5.43801C14.9474 5.53136 15.0075 5.62124 15.1001 5.64152L17.0673 6.07197C17.1873 6.09824 17.2444 6.23612 17.1781 6.33959L16.0915 8.03494C16.0403 8.11479 16.0614 8.22081 16.1393 8.275L17.7919 9.42548C17.8928 9.49569 17.8928 9.64493 17.7919 9.71515L16.1393 10.8656C16.0614 10.9198 16.0403 11.0258 16.0915 11.1057L17.1781 12.801C17.2444 12.9045 17.1873 13.0424 17.0673 13.0687L15.1001 13.4991C15.0075 13.5194 14.9474 13.6093 14.9642 13.7026L15.3193 15.6847C15.3409 15.8057 15.2354 15.9112 15.1144 15.8896L13.1323 15.5345C13.0389 15.5177 12.9491 15.5778 12.9288 15.6704L12.4983 17.6376C12.4721 17.7576 12.3342 17.8148 12.2307 17.7484L10.5354 16.6618C10.4555 16.6107 10.3495 16.6317 10.2953 16.7096L9.14483 18.3623C9.07462 18.4631 8.92538 18.4631 8.85517 18.3623L7.70469 16.7096C7.6505 16.6317 7.54448 16.6107 7.46463 16.6618L5.76928 17.7484C5.66581 17.8148 5.52793 17.7576 5.50166 17.6376L5.07121 15.6704C5.05093 15.5778 4.96105 15.5177 4.86769 15.5345L2.88557 15.8896C2.7646 15.9112 2.65907 15.8057 2.68074 15.6847L3.03585 13.7026C3.05257 13.6093 2.99252 13.5194 2.89987 13.4991L0.932726 13.0687C0.81267 13.0424 0.75556 12.9045 0.821876 12.801L1.90848 11.1057C1.95965 11.0258 1.93857 10.9198 1.86073 10.8656L0.208054 9.71515C0.10719 9.64493 0.10719 9.49569 0.208054 9.42548L1.86073 8.275C1.93857 8.22081 1.95965 8.11479 1.90848 8.03494L0.821876 6.33959C0.75556 6.23612 0.812671 6.09824 0.932726 6.07197L2.89987 5.64152C2.99252 5.62124 3.05257 5.53136 3.03585 5.43801L2.68074 3.45588C2.65907 3.33491 2.7646 3.22938 2.88557 3.25106L4.86769 3.60616C4.96105 3.62288 5.05093 3.56283 5.07121 3.47018L5.50166 1.50304C5.52793 1.38298 5.66581 1.32587 5.76928 1.39219L7.46463 2.47879C7.54448 2.52997 7.6505 2.50888 7.70469 2.43104L8.85517 0.778366Z"
                        fill="currentColor"></path>
                      <path
                        d="M12.5067 8.4409L8.60229 12.345C8.55712 12.3901 8.50348 12.426 8.44445 12.4504C8.38542 12.4749 8.32215 12.4875 8.25826 12.4875C8.19436 12.4875 8.13109 12.4749 8.07206 12.4504C8.01303 12.426 7.9594 12.3901 7.91422 12.345L5.73658 10.1558C5.64551 10.0646 5.59436 9.94093 5.59436 9.81203C5.59436 9.68314 5.64551 9.55951 5.73658 9.4683L6.46631 8.73857C6.55723 8.64763 6.68047 8.59638 6.80906 8.59604C6.93766 8.5957 7.06116 8.64629 7.15256 8.73675L8.26662 9.80914L8.26996 9.81249L11.0895 7.03435C11.1806 6.94355 11.3041 6.89258 11.4327 6.89258C11.5614 6.89258 11.6848 6.94355 11.776 7.03435L12.5057 7.7507C12.5513 7.79585 12.5875 7.84957 12.6122 7.90877C12.6369 7.96796 12.6497 8.03146 12.6498 8.09561C12.6499 8.15976 12.6373 8.22329 12.6127 8.28255C12.5881 8.34181 12.5521 8.39563 12.5067 8.4409Z"
                        fill="currentColor"></path>
                    </svg>
                  </div>
                </div>
                <div className="community-size text---no-wrap scale-90 ben  mt-1 -ml-2 ">
                  <Link
                    target="_blank"
                    className="flex items-center gap-1"
                    href={"https://www.instagram.com/sarah_atcho"}>
                    <FaInstagram size={20} /> <span>Instagram</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;

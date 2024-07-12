import { useState } from 'react';
import Image from 'next/image';
import filteringIcon from '../../public/images/filtering.svg';
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import searchIcon from '../../public/images/searchIcon.svg';
const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleAnswerIndex, setVisibleAnswerIndex] = useState(null);

  const TheFaqs = [
    {
        question: 'How Does SplitEV Host Earning Work?',
        firstAns: 'Earning Money as a SplitEV Host – It\'s Simple and Rewarding!',
        howItWork: 'As a host with SplitEV, you turn your private EV charger into a money-making asset. Here\'s how it works:',
        answer: [
            "Become a Host: Sign up with SplitEV and list your EV charger. It\'s quick and easy!",
            "Charge EVs, Earn Cash: Every time an EV driver charges their car at your station, you get paid. You\'ll earn money based on the amount of electricity their car uses.",
            "Your Rate: We pay you $0.30 for every kilowatt-hour (kWh) of electricity that you provide to the cars.",
            "Our Small Commission: To keep the service running smoothly, SplitEV takes a commission from your earnings. If you have solar panels, you'll be part of our green initiative, and the rate during daylight hours, plus you get featured as a prime station!",
            "More Earnings, Less Hassle: The more EVs you charge, the more you earn. And don't worry about the details – we handle all the payment processing for you.",
            "Check Your Earnings: You can always check how much you've earned in our app. It's transparent and straightforward."
        ]
    },
    {
        question: 'Is SplitEV Host Program Secure?',
        firstAns: 'Yes, Safety and Security Are Our Top Priorities.',
        howItWork: 'We ensure that every transaction and interaction is secure and reliable. Here\'s what we do:',
        answer: [
            "Secure Payments: All payments are processed securely through our app, ensuring that you get paid promptly and safely.",
            "Verified Drivers: We verify all drivers using our platform to ensure they are trustworthy and responsible.",
            "Insurance Coverage: SplitEV provides insurance coverage for any unforeseen incidents that might occur during the charging process.",
            "Privacy Protection: We respect your privacy and protect your personal information at all times."
        ]
    },
    {
        question: 'Can I Set My Own Charging Rates?',
        firstAns: 'Yes, You Have the Flexibility to Set Your Own Rates.',
        howItWork: 'As a host, you can determine the rate you want to charge for your EV station. Here\'s how:',
        answer: [
            "Flexible Pricing: You have control over your pricing. Set a rate that you believe is fair and competitive.",
            "Rate Adjustments: You can adjust your rates at any time through our app. Make changes based on demand, peak hours, or special events.",
            "Recommendations: SplitEV provides recommendations based on market trends to help you maximize your earnings."
        ]
    },
    {
        question: 'How Do I Join the SplitEV Host Program?',
        firstAns: 'Joining the SplitEV Host Program is Easy!',
        howItWork: 'Follow these simple steps to become a host:',
        answer: [
            "Sign Up: Create an account on the SplitEV app or website.",
            "List Your Charger: Add details about your EV charger, including location, availability, and pricing.",
            "Verification: We\'ll verify your details and approve your listing.",
            "Start Earning: Once approved, your charger will be available for EV drivers to use, and you can start earning money."
        ]
    },
    {
        question: 'What Are the Benefits of Hosting with SplitEV?',
        firstAns: 'Hosting with SplitEV Comes with Many Benefits!',
        howItWork: 'Here are some of the key benefits:',
        answer: [
            "Earn Extra Income: Turn your EV charger into a passive income source.",
            "Support the EV Community: Help EV drivers find reliable charging stations.",
            "Flexible Schedule: You control when your charger is available for use.",
            "Eco-Friendly: If you have solar panels, contribute to our green initiative and earn more during daylight hours.",
            "Easy Management: Our app makes it simple to manage your charger, track earnings, and adjust settings."
        ]
    },
    {
        question: 'Is There a Fee to Join the SplitEV Host Program?',
        firstAns: 'No, Joining the SplitEV Host Program is Free!',
        howItWork: 'You can join the SplitEV host program without any upfront costs. Here\'s what you need to know:',
        answer: [
            "Free Sign-Up: There are no registration or listing fees.",
            "Commission-Based Earnings: We take a small commission from your earnings to keep the platform running smoothly.",
            "Transparent Fees: All fees and commissions are transparent, so you always know how much you\'re earning."
        ]
    }
];

  const handleToggleAnswer = (index: any) => {
    setVisibleAnswerIndex(visibleAnswerIndex === index ? null : index);
  };

  const filteredFaqs = TheFaqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.firstAns.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='py-[150px] flex-col flex items-center justify-center gap-y-[100px] px-[30px]'>
      <div className='max-w-[800px] flex-col flex items-center justify-center gap-y-[50px] px-[30px]'>
        <div className="bg-gradient-to-r rounded-[10px] from-[#CFF0AD] to-[#A6E675] p-[10px] items-center w-full md:rounded-full">
          <div className='bg-primaryBg p-[10px] rounded-[10px] md:rounded-full flex flex-col md:flex-row items-center justify-between gap-[10px] md:gap-[150px]'>
            <div className="flex items-center w-full gap-[10px]">
              <input 
                type="text" 
                className="flex w-full outline-0 items-center leading-[140%] font-[400] text-[12px] md:text-[14px] text-primaryText bg-[#FFF] shadow-md  rounded-[10px] md:rounded-full h-[40px] md:h-[60px] px-[20px]" 
                placeholder="Enter keywords that characterize your problem" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
       <button className="md:w-[60px] w-[40px] h-[40px] md:h-[60px] px-[10px] md:px-[20px] rounded-full p-[3px] flex items-center justify-center bg-white">
                <Image src={searchIcon} alt="Filter Icon" width={20} height={20} />
              </button>
            </div>
            <div className="flex items-center  gap-[20px]">
              <select name="" className='bg-primaryBg  outline-0 option:bg-primaryBg ' id="">
                <option value="">Select Type</option>
                <option value="First Type">First Type</option>
                <option value="Second Type">Second Type</option>
                <option value="Third Type">Third Type</option>
              </select>
            <button className="md:w-[60px] w-[40px] h-[40px] md:h-[60px] px-[10px] rounded-full p-[3px] flex items-center justify-center bg-white">
                <Image src={filteringIcon} alt="Filter Icon" width={20} height={20} />
              </button>

            </div>
          </div>
        </div>
        <div className="w-full ">
          {filteredFaqs.map((faq, index) => (
            <div key={index} className="mb-[20px] bg-white py-[20px] md:min-w-[700px] md:max-w-[700px] rounded-[20px] px-[20px] ">
              <button
                className="w-full text-left flex justify-between  text-black text-[18px] leading-[150%] font-[600] p-[10px] rounded-md"
                onClick={() => handleToggleAnswer(index)}
              >
                {faq.question}
                {visibleAnswerIndex !== index && <RiArrowDropDownLine className='text-[50px] '/>}
               { visibleAnswerIndex === index && <RiArrowDropUpLine className='text-[50px] '/>}
              </button>
              {visibleAnswerIndex === index && (
                <div className="mt-[10px] flex flex-col gap-3 p-[10px] bg-[#F5F5F5] rounded-md">
                  <p className='text-[#A6E675] font-[700] leading-[130%] text-[16px] '>{faq.firstAns}</p>
                  <p  className='text-textPrimary font-[700] leading-[130%] text-[16px] '>{faq.howItWork}</p>
                  <ul className=" flex flex-col text-[14px] gap-2 text-textPrimary">
                    {faq.answer.map((ans, i) => (
                      <li key={i}>{i+1}. {ans}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

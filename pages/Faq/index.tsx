import { useState } from 'react';
import Image from 'next/image';
import filteringIcon from '../../public/images/filtering.svg';

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
      <div className='max-w-[800px] flex-col flex items-center justify-center gap-y-[100px] px-[30px]'>
        <div className="bg-gradient-to-r from-[#CFF0AD] to-[#A6E675] p-[10px] items-center w-full rounded-full">
          <div className='bg-primaryBg p-[10px] rounded-full flex items-center justify-between gap-[30px] md:gap-[150px]'>
            <div className="flex items-center gap-[20px]">
              <input 
                type="text" 
                className="flex w-full outline-0 items-center leading-[140%] font-[400] text-[12px] md:text-[14px] text-primaryText bg-[#FFF] shadow-md rounded-full h-[60px] pl-[20px] pr-[30px]" 
                placeholder="Enter keywords that characterize your problem" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="w-[60px] h-[60px] px-[20px] rounded-full p-[3px] flex items-center justify-center bg-white">
                <Image src={filteringIcon} alt="Filter Icon" width={20} height={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="w-full mt-[30px]">
          {filteredFaqs.map((faq, index) => (
            <div key={index} className="mb-[20px]">
              <button
                className="w-full text-left bg-gray-100 p-[10px] rounded-md"
                onClick={() => handleToggleAnswer(index)}
              >
                {faq.question}
              </button>
              {visibleAnswerIndex === index && (
                <div className="mt-[10px] p-[10px] bg-gray-200 rounded-md">
                  <p>{faq.firstAns}</p>
                  <p>{faq.howItWork}</p>
                  <ul className="list-disc list-inside">
                    {faq.answer.map((ans, i) => (
                      <li key={i}>{ans}</li>
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

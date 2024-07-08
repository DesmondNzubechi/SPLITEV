import Link from "next/link"


export const SupportingYou = () => {
    return <div className="flex justify-center px-[30px] md:px-[50px] py-[100px] items-center">
        <div className="flex bg-[#FFF] flex-col w-full px-[30px] py-[30px] gap-[33px] items-center  ">
        <svg xmlns="http://www.w3.org/2000/svg" width="86" height="76" viewBox="0 0 86 76" fill="none">
  <path d="M85.5 25.1613C85.5 11.526 71.5813 0.422852 54.4928 0.422852C37.4043 0.422852 23.5032 11.526 23.5032 25.1613C23.5032 25.8164 23.5386 26.3831 23.574 26.9322C22.8479 27.0917 22.1042 27.2508 21.3782 27.4636L11.1428 20.9999C9.69076 20.0789 7.81362 21.1946 7.93754 22.8946L8.64591 34.1217C3.38656 38.6905 0.5 44.6051 0.5 50.8561C0.5 64.4916 14.4011 75.5769 31.4896 75.5769C48.5781 75.5769 62.4792 64.4916 62.4792 50.8561C62.4792 50.254 62.4083 49.6697 62.3553 49.0853C63.1345 48.9259 63.8959 48.7488 64.5865 48.554L74.8396 55.0352C76.2916 55.9205 78.1687 54.805 78.0448 53.1228L77.3365 41.8779C82.5958 37.3269 85.5 31.3946 85.5 25.1613ZM31.4898 73.8061C15.3752 73.8061 2.27103 63.5176 2.27103 50.8561C2.27103 45.0125 5.05131 39.4519 10.1335 35.1843C10.3461 35.0072 10.47 34.7416 10.4522 34.4582L9.70856 22.7707C9.69076 22.5227 9.95655 22.3458 10.1867 22.4875L20.7763 29.1634C20.9889 29.3051 21.2545 29.3405 21.5023 29.2697C24.2648 28.4552 27.9482 27.8707 31.4898 27.8707C47.6045 27.8707 60.7085 38.177 60.7085 50.8561C60.7083 63.5176 47.6043 73.8061 31.4898 73.8061ZM44.1334 25.1613C44.1334 24.6833 44.5229 24.276 45.0188 24.276H61.5937C62.0895 24.276 62.479 24.6833 62.479 25.1613C62.479 25.6571 62.0895 26.0466 61.5937 26.0466H45.0189C44.5229 26.0466 44.1334 25.6571 44.1334 25.1613ZM68.9959 33.9802H57.6095C57.1314 33.9802 56.7242 33.5905 56.7242 33.0948C56.7242 32.6166 57.1315 32.2095 57.6095 32.2095H68.9959C69.4741 32.2095 69.8813 32.6168 69.8813 33.0948C69.8813 33.5905 69.474 33.9802 68.9959 33.9802ZM68.9959 18.1135H39.9896C39.4938 18.1135 39.1043 17.7239 39.1043 17.2281C39.1043 16.7499 39.494 16.3428 39.9896 16.3428H68.9959C69.4918 16.3428 69.8813 16.7501 69.8813 17.2281C69.8813 17.7239 69.4918 18.1135 68.9959 18.1135Z" fill="#0C1101"/>
  <path d="M45.9884 57.8877H16.9771C16.4878 57.8877 16.0918 58.2837 16.0918 58.773C16.0918 59.2624 16.4878 59.6584 16.9771 59.6584H45.9884C46.4778 59.6584 46.8737 59.2624 46.8737 58.773C46.8737 58.2837 46.4778 57.8877 45.9884 57.8877Z" fill="#ABE138"/>
  <path d="M45.9936 49.9585H24.3814C23.8921 49.9585 23.4961 50.3545 23.4961 50.8438C23.4961 51.3332 23.8921 51.7292 24.3814 51.7292H45.9936C46.483 51.7292 46.879 51.3332 46.879 50.8438C46.879 50.3545 46.483 49.9585 45.9936 49.9585Z" fill="#ABE138"/>
  <path d="M45.9884 42.0278H16.9771C16.4878 42.0278 16.0918 42.4238 16.0918 42.9132C16.0918 43.4025 16.4878 43.7985 16.9771 43.7985H45.9884C46.4778 43.7985 46.8737 43.4025 46.8737 42.9132C46.8739 42.4238 46.4778 42.0278 45.9884 42.0278Z" fill="#ABE138"/>
            </svg>
            <h1 className="text-[25px] md:text-[48px] text-blackText leading-[140%] font-[600] ">Supporting You on the Road</h1>
            <p className=" font-[500] leading-[130%] text-textPrimary text-center text-[15px] md:text-[22px] max-w-[861px] ">Our dedicated customer support team is here to help you with any queries or support you might need on your EV journey. With SplitEV, you're never driving alone</p>
<Link href='/' className="h-[40px] bg-[#BDE6A4] rounded-[22px] text-blackText flex items-center justify-center px-[18px] ">Ask a question now</Link>
        </div>
    </div>
}
import Link from 'next/link'
import Image from 'next/image'

const ChattingCard =()=>{

    return(

            <div className="sm:container  ">
            <div className="flex space-x-2 pt-2">
            <div>
                <Link href="/main" passHref><Image  src="/favicon.ico" width={40} height={40} ></Image></Link>
            </div>
                <div >
                    <div className="font-bold">
                        아리랑
                    </div>
                    <div className="font-">
                        넹
                    </div>
                </div>
                <div className="pl-12 text-gray-400 text-sm">3분전</div>
                <div className='flex float-right '>
                    <div>코딩</div>
                    <div>교환</div>
                    <div>영어</div>
                </div>
            </div>
           
            <hr></hr>
        </div>

    );
}
export default ChattingCard;
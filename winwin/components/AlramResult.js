import Image from "next/image";
import Link from "next/link";

const AlramResult =()=>{
    return(

        <div className="sm:container  ">
            <div className="flex space-x-2 pt-2">
            <div>
                <Link href="/main" passHref><Image  src="/favicon.ico" width={40} height={40} ></Image></Link>
            </div>
            <div className="font-bold">
                아리랑님, 00님이 채팅을 걸어왔어요. 확인해보세요!
            </div>
            </div>
            <div className="pl-12 text-gray-400 text-sm">3분전</div>
     
        </div>
    );
}
export default AlramResult;
import {Inter} from "next/font/google";
import {useState} from "react";

const inter = Inter({subsets: ["latin"]});

export default function Home() {

    const [copied, setCopied] = useState(false);

    return (
        <main className="bg-gray-800 flex flex-col justify-center items-center h-screen p-10 md:p-24">
            <div className="text-center p-4">
                <h1 className="text-4xl font-bold text-white">This is <span className="text-pink-300">purofle</span>
                </h1>
                <h2 className="text-xl text-gray-400 pt-2 md:pt-5 line-through">我很可爱，请给我钱</h2>
            </div>

            <div className="flex flex-col gap-6">
                <div className="border border-gray-600 rounded-lg p-8 flex-1 text-center">
                    <h2 className="text-xl font-semibold text-white">使用虚拟货币</h2>
                    <p className="text-sm text-gray-300">
                        使用虚拟货币给我打钱捐赠，点击下面的按钮来复制地址。
                    </p>
                    <div className="mt-4 flex justify-center">
                        <button
                            className="mt-4 bg-blue-400 hover:bg-blue-600 text-white py-2 px-4 rounded-md mr-4"
                            onClick={() => {
                                navigator.clipboard.writeText("TQBAYwveaQZhQPMNGsYWqZDbCda7GuT6iu").then(r => {
                                    makeCopied();
                                })
                            }
                            }>Tether
                        </button>
                        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mr-4"
                                onClick={() => {
                                    navigator.clipboard.writeText("0x6607A11C4Be2E99cA42FbEdFCAE8F295523aC80e").then(r => {
                                        makeCopied();
                                    })
                                }}>EVM
                            Chain(BSC,ETH)
                        </button>
                        <button className="mt-4 bg-blue-600 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
                                onClick={() => {
                                    navigator.clipboard.writeText("DH3zGJQTm4yqDujKTSsCxiQgTSMqLoKsQki1mjsuV3tS").then(r => {
                                        makeCopied();
                                    })
                                }}>Solana
                        </button>
                    </div>

                    <p className={"text-green-500 mt-2 transition-opacity ease-in-out delay-150 duration-300 " + (copied ? "opacity-100" : "opacity-0")}>已复制</p>
                </div>

                <div className="border border-gray-600 rounded-lg p-8 flex-1 text-center">
                    <h2 className="text-xl font-semibold text-white">使用 Stripe 捐赠</h2>
                    <p className="text-sm text-gray-300">
                        使用 Stripe 捐赠，支持支付宝及银行卡。
                    </p>
                    <a href="https://donate.stripe.com/bIY9CAfTh5IweDmfZm"><button className="mt-4 bg-blue-400 hover:bg-blue-600 text-white py-2 px-4 rounded-md">捐赠
                    </button></a>
                </div>
            </div>
        </main>
    );

    function makeCopied() {
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 500);
    }
}

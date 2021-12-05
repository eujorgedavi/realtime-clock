type Props = {
    date?: Date | any,
}

const timerClassName = "w-24 h-20 bg-timerBg rounded-lg flex justify-center items-center text-white mx-2 text-5xl " +
    "tracking-widest font-inputText bg-gradient-to-b from-gray-900 to-gray-800";

const templateClassName = "w-96 h-40 bg-gradient-to-b from-firstGr to-secondGr border-border border-outer rounded-3xl " +
    "flex flex-row justify-center items-center shadow-2xl"

export default function({  date }: Props) {

    const secondsDate = new Date();

    return (
        <div className="mx-auto sm:px-6 lg:px-8">
            <div className="px-4 py-4 sm:px-0">
                <div
                    className={templateClassName}>
                    <div
                        className={timerClassName}>
                        {date?.getUTCHours() < 10 ? "0" + date?.getUTCHours().toString() : date?.getUTCHours()}
                    </div>
                    <div
                        className={timerClassName}>
                        {date?.getMinutes() < 10 ? "0" + date?.getMinutes().toString() : date?.getMinutes()}
                    </div>
                    <div
                        className={timerClassName}>
                        {secondsDate.getSeconds() < 10 ? "0" +
                            secondsDate.getSeconds() : secondsDate.getSeconds()}
                    </div>
                </div>
            </div>
        </div>
    )
}

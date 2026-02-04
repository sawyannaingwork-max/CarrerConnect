export default function SalaryResultSkeleton() {
    return(
        <div className="w-[90%] mx-auto mt-9 font-itim animate-pulse">
            <table className="w-full border border-collapse">
                <tbody>
                    <tr>
                        <td>Job title</td>
                        <td className="w-40 bg-gray-400"></td>
                    </tr>
                    <tr>
                        <td>Currency</td>
                        <td className="w-40 bg-gray-400"></td>
                    </tr>

                    <tr>
                        <td>Period</td>
                        <td className="w-40 bg-gray-400"> </td>
                    </tr>

                    <tr>
                        <td>Mininum Salary</td>
                        <td className="w-40 bg-gray-400"></td>
                    </tr>

                    <tr>
                        <td>Maximum Salary</td>
                        <td className="w-40 bg-gray-400"></td>
                    </tr>

                    <tr>
                        <td>Median Salary</td>
                        <td className="w-40 bg-gray-400"></td>
                    </tr>

                    <tr>
                        <td>Minimum Additional Pay</td>
                        <td className="w-40 bg-gray-400"></td>
                    </tr>

                    <tr>
                        <td>Maximum Additional Pay</td>
                        <td className="w-40 bg-gray-400"></td>
                    </tr>

                    <tr>
                        <td>Publisher</td>
                        <td className="w-40 bg-gray-400"></td>
                    </tr>

                    <tr>
                        <td>Publisher Link</td>
                        <td className="w-40 bg-gray-400"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
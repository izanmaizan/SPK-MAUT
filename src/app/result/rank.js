import React, { Component } from "react";

export default class Rank extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        this.setData(this.props.data);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.data !== this.props.data) {
            this.setData(this.props.data);
        }
    }

    setData(data) {
        this.setState({ data });
    }

    render() {
        const { data } = this.state;

        return (
            <React.Fragment>
                <h1 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                    Ranking
                </h1>
                <div className="relative overflow-x-auto">

                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-white uppercase dark:bg-gray-700 dark:text-gray-400 bg-gradient-to-tr from-[#9089fc] to-[#ff80b5]">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    No
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Nama Alternatif
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Nilai
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data &&
                                data.rank.map((e, i) => {
                                    return (
                                        <tr
                                            key={i}
                                            className="border-b border-gray-200 dark:border-gray-700"
                                        >
                                            <td className="px-6 py-3 text-sm">{i + 1}</td>
                                            <td className="px-6 py-3 text-sm">{e.name}</td>
                                            <td className="px-6 py-3 text-sm">{e.rank}</td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        )
    }
}
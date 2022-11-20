import React from 'react'
import TeamSVG from './TeamSVG'

const Member = ({member}) => {
    return (
        <div class="relative">
            <a href="#" class="group relative block bg-black">
                <img
                    alt="Developer"
                    src={member.image}
                    class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div class="relative p-8">
                    <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                        {member.designation}
                    </p>

                    <p class="text-2xl font-bold text-white">
                        {member.name}
                    </p>

                    <div class="mt-64">
                        <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                            <div className="text-center flex justify-between items-center w-full m-auto">
                                <TeamSVG links={member['social-links']} />
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>

    )
}

export default Member
import React from 'react'
import PropTypes from "prop-types"
export default function RepoItem() {
    return (
        <div className="repoItem">
            <h3>{props.repoName}</h3>
            <h2>
                <a href={props.link}>{props.fullName}</a>
            </h2>
        </div>
    )
}
RepoItem.propTypes = {
    link: PropTypes.string.isRequired,
    repoName: PropTypes.string.isRequired,
    fullname: PropTypes.string.isRequired,
}
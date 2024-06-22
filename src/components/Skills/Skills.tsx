import {ISkills as Props} from "../../other/items-skills.ts";

export function Skills({title, progress}: Props) {

    return (
        <div className="col-xl-5 col-12 mt-5">
            <h3>{title}</h3>
            <div className="progress" role="progressbar" aria-label="Example with label"
                 aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                <div className="progress-bar" style={{
                    width: `${progress}%`
                }}>{progress}%
                </div>
            </div>
        </div>
    );
}
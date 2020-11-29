function getReadableTime(value: number): string {
    const readableTime = Math.floor(value / 60) + ":" + ("0" + Math.floor(value % 60)).slice(-2);
    return (readableTime)

}

function turnToDegrees(value: number, max: number, rotations: number): number {
    return (
        value / max * rotations * (360)
    )

}

export { getReadableTime, turnToDegrees }
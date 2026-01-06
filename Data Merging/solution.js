/**
 * @param {Array<{user: number, duration: number, equipment: Array<string>}>} sessions
 * @return {Array}
 */
export default function mergeData(sessions) {
    let map = new Map();
    const res = [];
    sessions.forEach((session) => {
        if (map.has(session.user)) {
            const userSesh = map.get(session.user);
            userSesh.duration += session.duration;
            session.equipment.forEach((equipment) => {
                userSesh.equipment.add(equipment);
            });
        } else {
            const cloudSession = {
                ...session,
                equipment: new Set(session.equipment);
            };
            map.set(session.user, cloudSession);
            res.push(cloudSession);
        }
    });

    return res.map((session) => ({
        ...session,
        equipment: Array.from(session.equipment).sort(),
    }));
}

export interface DispatchCall {
    callId: number,
    origin: number, // See ORIGIN Enum
    status: number, // See CALL_STATUS Enum
    priority: number, // 1, 2, or 3
    block: string,
    address: string,
    postal: string,
    title: string,
    code: string,
    description: string,
    notes: string,
    units: Unit[]
}

export interface Unit {
    id: string,
    accId: string, // Account UUID
    status: number, // See UNIT_STATUS Enum
    isPanic: boolean, // PANIC State
    location: string,
    aop: string,
    data: {
        apiId1: string, // API ID - Typically Steam Hex
        apiId2: string, // API ID - Typically Steam Hex
        unitNum: string,
        name: string,
        district: string,
        department: string,
        subdivision: string,
        rank: string,
        group: string, // Name of unit group
    }
}

export interface EmergencyCall {
    callId: number,
    isEmergency: boolean, // CIVIL or EMERGENCY
    caller: string,
    location: string,
    description: string
}
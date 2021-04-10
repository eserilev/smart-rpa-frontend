export class ContractFactory {
    
    constructor(abi: string, address: string) {
        this.abi = abi;
        this.address = address;
    }

    public abi: string;
    public address: string;
}

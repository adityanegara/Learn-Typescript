import { Clock } from "../src/14.Clock";


describe('Clock', () => {
    describe('Creating a new clock with an initial time', () => {
        it('on the hour', () => {
            expect(new Clock(8).toString()).toEqual('08:00')
        })
        it('past the hour', () => {
            expect(new Clock(11, 9).toString()).toEqual('11:09')
        })

        it('midnight is zero hours', () => {
            expect(new Clock(24, 0).toString()).toEqual('00:00')
        })

        it('hour rolls over', () => {
            expect(new Clock(25, 0).toString()).toEqual('01:00')
        })
        it('hour rolls over continuously', () => {
            expect(new Clock(100, 0).toString()).toEqual('04:00')
        })

        it('sixty minutes is next hour', () => {
            expect(new Clock(1, 60).toString()).toEqual('02:00')
        })

        it('minutes roll over', () => {
            expect(new Clock(0, 160).toString()).toEqual('02:40')
        })

        it('minutes roll over continuously', () => {
            expect(new Clock(0, 1723).toString()).toEqual('04:43')
        })
        it('hour and minutes roll over', () => {
            expect(new Clock(25, 160).toString()).toEqual('03:40')
        })
        it('hour and minutes roll over continuously', () => {
            expect(new Clock(201, 3001).toString()).toEqual('11:01')
        })
        it('hour and minutes roll over to exactly midnight', () => {
            expect(new Clock(72, 8640).toString()).toEqual('00:00')
        })
        it('negative hour', () => {
            expect(new Clock(-1, 15).toString()).toEqual('23:15')
        })
        it('negative hour rolls over', () => {
            expect(new Clock(-25, 0).toString()).toEqual('23:00')
        })

        it('negative hour rolls over continuously', () => {
            expect(new Clock(-91, 0).toString()).toEqual('05:00')
        })

        it('negative minutes', () => {
            expect(new Clock(1, -40).toString()).toEqual('00:20')
        })

        it('negative minutes rolls over', () => {
            expect(new Clock(1, -160).toString()).toEqual('22:20')
        })

        it('negative minutes rolls over continuously', () => {
            expect(new Clock(1, -4820).toString()).toEqual('16:40')
        })

        it('negative hour and minutes both roll over', () => {
            expect(new Clock(-25, -160).toString()).toEqual('20:20')
        })

        it('negative hour and minutes both roll over continuously', () => {
            expect(new Clock(-121, -5810).toString()).toEqual('22:10')
        })

    })
})

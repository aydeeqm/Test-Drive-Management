import createStore from 'redux-zero';
import susuki1 from './imgs/susuki/newvitara.png';
import susuki2 from './imgs/susuki/nomade.png';
import susuki3 from './imgs/susuki/s-cross.png';
import mazda1 from './imgs/mazda/mazda3sport.jpg';
import mazda2 from './imgs/mazda/mazdacx5.JPG';
import mazda3 from './imgs/mazda/mazdamx5rf.jpg';
import citroen1 from './imgs/citroen/citroen1.png';
import citroen2 from './imgs/citroen/citroencactus2.jpg';
import citroen3 from './imgs/citroen/citroEnlysse3.png';
import DsAutomobiles1 from './imgs/ds/ds4crossback.png';
import DsAutomobiles2 from './imgs/ds/newds3.png';
import DsAutomobiles3 from './imgs/ds/newds5.jpg';
import haval1 from './imgs/haval/havalh2black.jpg';
import haval2 from './imgs/haval/havalh6sport.jpg';
import greadwall1 from './imgs/greatwall/newvoleex.png';
import greadwall2 from './imgs/greatwall/wingle5.png';
import changan1 from './imgs/changan/changancs15.jpg';
import changan2 from './imgs/changan/changancx70.png';
import jac1 from './imgs/jac/grands3.png';
import jac2 from './imgs/jac/j4.png';


export const cars = [
    {
        marca: 'susuki',
        id:1,
        modelo: [
            {
                codigo: 'DP01',
                modelo: 'Grand Nomade 2.4 At 4x4 Lux',
                color: ['Bronce Bizonte','Verde Metálico'],
                fabricación: '2017',
                serie:'TSMYE21SXJM346793',
                placa: 'AXZ444',
                img:susuki2,
            },
            {
                codigo: 'DP02',
                modelo: 'New Vitara GLX Lux 6AT 4WD VVT',
                color: ['Plata', 'Azul Turquesa'],
                fabricación: '2017',
                serie:'TSMYE21SXJM346794',
                placa: 'AXZ074',
                img:susuki1,
            },
            {
                codigo: 'DP03',
                modelo: 'S-CROSS',
                color: ['Plata', 'Azul Turquesa'],
                fabricación: '2016',
                serie:'TSMYE21SXJM7867',
                placa: 'AXZ008',
                img:susuki3,
            }
        ]
    },
    {
        marca: 'mazda',
        id:2,
        modelo: [
            {
                codigo: 'MD01',
                modelo: 'Mazda CX5 MT 2.0 2WD 65 Core new',
                color: ['Gris metálico','Blanco'],
                fabricación: '2017',
                serie:'MTCX31ASDS324456',
                placa: 'MTX435',
                img:mazda2,
            },
            {
                codigo: 'MD02',
                modelo: 'Mazda MX-5 At 2.0 65 High RF',
                color: ['Negro', 'Rojo'],
                fabricación: '2017',
                serie:'MTCX56ASDF564345',
                placa: 'TMX456',
                img:mazda1,
            },
            {
                codigo: 'MD03',
                modelo: 'Mazda 3 SPORT',
                color: ['Negro', 'Rojo'],
                fabricación: '2017',
                serie:'MTCX56ASDF3457',
                placa: 'TMX600',
                img:mazda3,
            }
        ]
    },
    {
        marca: 'citroen',
        id:3,
        modelo: [
            {
                codigo: 'CT01',
                modelo: 'Citroen C4 1.6 VTI 120HP BVMS FEEL',
                color: ['blanco','negro'],
                fabricación: '2017',
                serie:'CTRN23GHJV453422',
                placa: 'CTR046',
                img:citroen1,
            },
            {
                codigo: 'CT02',
                modelo: 'Citroen C4 Cactus 1.2 pure tech 82 BVM Feel',
                color: ['negro','gold'],
                fabricación: '2017',
                serie:'CTRP45sdfg462367',
                placa: 'CTS456',
                img:citroen2,
            },
            {
                codigo: 'CT03',
                modelo: 'Citroen Enlysse',
                color: ['negro','gold'],
                fabricación: '2017',
                serie:'CTRP45sdfg46789',
                placa: 'CTS050',
                img:citroen3,
            }
        ]
    },
    {
        marca: 'DsAutomobiles',
        id:4,
        modelo: [
            {
                codigo: 'DS01',
                modelo: 'DS4 Crossback',
                color: ['Pearl White', 'Ink Blue'],
                fabricación: '2017',
                serie:'DSAU45G34367',
                placa: 'DSA456',
                img:DsAutomobiles1,
            },
            {
                codigo: 'DS02',
                modelo: 'New DS3',
                color: ['Ink Blue','latinium Grey'],
                fabricación: '2017',
                serie:'DSAU45G4535',
                placa: 'ASD064',
                img:DsAutomobiles2,
            },
            {
                codigo: 'DS03',
                modelo: 'New DS5',
                color: ['Ink Blue','latinium Grey'],
                fabricación: '2017',
                serie:'DSAU45G8765',
                placa: 'ASD078',
                img:DsAutomobiles3,
            }
        ]
    },
    {
        marca: 'Haval',
        id:5,
        modelo: [
            {
                codigo: 'HV01',
                modelo: 'Haval H2 MTR GW4G15B',
                color: ['Negro','Marfil'],
                fabricación: '2016',
                serie:'HVHT45SDKK4656',
                placa: 'PPT456',
                img:haval1,
            },
            {
                codigo: 'HV02',
                modelo: 'Haval H6 Sport',
                color: ['gray','rojo','negro'],
                fabricación:'2016',
                serie:'HVRT56FJUK4689',
                placa: 'FVH035',
                img:haval2,
            }
        ]
    },
    {
        marca: 'GreatWall',
        id:6,
        modelo: [
            {
                codigo: 'GW01',
                modelo: 'New Voleex C30 1.5 5MT Fashionable',
                color: ['blanco','gray','rojo'],
                fabricación: '2016',
                serie:'GRWL45DTHG565',
                placa: 'GTR345',
                img:greadwall1
            },
            {
                codigo: 'GW02',
                modelo: 'Wingle 5 Upgrade 2.8 TDI 6MT 4x4 Lux CD',
                color: ['gray','rojo'],
                fabricación:'2016',
                serie:'GRWL45DTHG348',
                placa: 'RUT075',
                img:greadwall2,
            }
        ]
    },
    {
        marca: 'Changan',
        id:7,
        modelo: [
            {
                codigo: 'HN01',
                modelo: 'Changan CX70',
                color: ['plata','rojo','verde'],
                fabricación: '2016',
                serie:'CHNG45DTHG232',
                placa: 'PAS034',
                img:changan2,
            },
            {
                codigo: 'HN02',
                modelo: 'Changan CS15',
                color: ['naranja','azul','negro'],
                fabricación:'2016',
                serie:'CHNG45DTH4564',
                placa: 'DFR005',
                img:changan1,
            }
        ]
    },
    {
        marca: 'JAC',
        id:8,
        modelo: [
            {
                codigo: 'JC01',
                modelo: 'GRAND S3',
                color: ['plomo', 'rojo','negro'],
                fabricación: '2017',
                serie:'NRRP4000NR347',
                placa: 'GHT003',
                img:jac1,
            },
            {
                codigo: 'JC02',
                modelo: 'J4 ',
                color: ['gris','negro','blanco'],
                fabricación:'2014',
                serie:'NRRP4000NR146',
                placa: 'DFT014',
                img:jac2,
            }
        ]
    },
]

        
        


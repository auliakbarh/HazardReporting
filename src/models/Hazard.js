import {Model} from '@nozbe/watermelondb';
import {field, action} from '@nozbe/watermelondb/decorators';

export default class Hazard extends Model {
  static table = 'hazards';

  @field('createdAt') createdAt;
  @field('_id') _id;
  @field('waktuLaporan') waktuLaporan;
  @field('judulHazard') judulHazard;
  @field('detailLaporan') detailLaporan;
  @field('lokasi') lokasi;
  @field('subLokasi') subLokasi;

  @action async getAllHazard(){
    return await this.collection.get('hazards').findAll();
  }

  @action async addHazard({
    createdAt = null,
    _id = null,
    waktuLaporan,
    judulHazard,
    detailLaporan,
    lokasi,
    subLokasi,
  }) {
    return await this.collection.get('hazards').create(hazard => {
      hazard.createdAt = createdAt;
      hazard._id = _id;
      hazard.waktuLaporan = waktuLaporan;
      hazard.judulHazard = judulHazard;
      hazard.detailLaporan = detailLaporan;
      hazard.lokasi = lokasi;
      hazard.subLokasi = subLokasi;
    });
  }
}

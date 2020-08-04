<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class BusinessService extends Model
{
    protected $guarded =[];
    public function type():BelongsTo{
        return $this->belongsTo(BusinessServiceType::class,'id','type_id');
    }
    public function ratings():HasMany{
        return $this->hasMany(BusinessServiceRating::class,'service_id','id');
    }
    public function slots():HasMany{
        return $this->hasMany(ServiceSlot::class,'service_id','id');
    }
    public function slotsTracker():HasMany{
        return $this->hasMany(ServiceSlotTracker::class,'service_id','id');
    }
}

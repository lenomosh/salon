<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ServiceSlotTracker extends Model
{
    protected $guarded = [];
    public function serviceSlot():BelongsTo{
        return $this->belongsTo(ServiceSlot::class,'id','service_id');
    }
}

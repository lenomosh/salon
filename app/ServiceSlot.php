<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ServiceSlot extends Model
{
    protected $guarded =[];
    public function service():BelongsTo{
        return $this->belongsTo(BusinessService::class,'id','service_id');

    }
}

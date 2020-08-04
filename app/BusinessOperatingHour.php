<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class BusinessOperatingHour extends Model
{
    protected $guarded = [];
    public function business(): BelongsTo{
        return $this->belongsTo(Business::class,'id','business_id');
    }
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Business extends Model
{
    protected $guarded = [];
    public function type(): BelongsTo
    {
        return $this->belongsTo(BusinessServiceType::class,'id','business_type');
}
public function image(): HasMany
{
    return $this->hasMany(BusinessImage::class,'business_id','id');
}
public function operatingHours():HasMany{
        return $this->hasMany(BusinessOperatingHour::class,'business_id','id');
}
}

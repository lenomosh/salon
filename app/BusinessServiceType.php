<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class BusinessServiceType extends Model
{
    protected $guarded = [];
    public function services():HasMany{
        return $this->hasMany(BusinessService::class,"service_type_id");
    }
}
